document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("surveyCreator");

    //Establece los idiomas q se pueden utilizar en las preguntas
    Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
    Survey.surveyLocalization.defaultLocale = "es";

    //Crea preguntas personalizadas
    Survey.ComponentCollection.Instance.add({
        // A unique name; must use lowercase
        name: "sexo",
        // A display name used in the Toolbox
        title: "Sexo",
        // A JSON schema for the base question type (Dropdown in this case)
        questionJSON: {
            type: "matrix",
            columns: [
                {
                    value: "Columna 1",
                    text: "Masculino",
                },
                {
                    value: "Columna 3",
                    text: "Femenino",
                },
            ],
            rows: ["Sexo"],
        },
    });

    Survey.ComponentCollection.Instance.add({
        // A unique name; must use lowercase
        name: "nombrecompleto",
        // A display name used in the Toolbox
        title: "Nombre Completo",
        // An array of JSON schemas that configure the nested questions
        elementsJSON: [
            {
                type: "text",
                name: "nombre",
                title: "Nombre",
                isRequired: true,
            },
            {
                type: "text",
                name: "apellidos",
                title: "Apellidos",
                isRequired: true,
                startWithNewLine: false,
            },
        ],
    });

    Survey.ComponentCollection.Instance.add({
        // A unique name; must use lowercase
        name: "pais",
        // A display name used in the Toolbox
        title: "País",
        // An array of JSON schemas that configure the nested questions
        elementsJSON: [
            {
                type: "dropdown",
                name: "region",
                title: "Seleccione una Region...",
                isRequired: true,
                choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
            },
            {
                type: "dropdown",
                name: "pais",
                title: "Seleccione un país",
                isRequired: true,
                visibleIf: "{composite.region} notempty",
                choicesByUrl: {
                    url: "https://surveyjs.io/api/CountriesExample?region={composite.region}",
                    valueName: "name",
                    titleName: "name",
                },
            },
        ],
    });

    Survey.ComponentCollection.Instance.add({
        name: "direccionEnvio",
        title: "Dirección de envío",
        elementsJSON: [
            {
                type: "comment",
                name: "direccionEnvio",
                title: "Dirección de envío",
                isRequired: true,
            },
            {
                type: "boolean",
                name: "facturacionIgualEnvio",
                title: "La dirección de envío es igual a la de facturación",
                defaultValue: true,
            },
            {
                type: "comment",
                name: "direccionFacturacion",
                title: "Dirección de facturación",
                // Use the `composite` prefix to access a question nested in the composite question
                enableIf: "{composite.facturacionIgualEnvio} <> true",
                isRequired: true,
            },
        ],
        onValueChanged(question, name) {
            const direccionEnvio =
                question.contentPanel.getQuestionByName("direccionEnvio");
            const direccionFacturacion =
                question.contentPanel.getQuestionByName("direccionFacturacion");
            const facturacionIgualEnvio =
                question.contentPanel.getQuestionByName(
                    "facturacionIgualEnvio"
                );

            if (name === "direccionEnvio") {
                // If "Shipping address same as business address" is selected
                if (facturacionIgualEnvio.value == true) {
                    // Copy the Business Address value to Shipping Address
                    direccionFacturacion.value = direccionEnvio.value;
                }
            }
            if (name === "facturacionIgualEnvio") {
                // If "Shipping address same as business address" is selected, copy the Business Address to Shipping Address
                // Otherwise, clear the Shipping Address value
                direccionFacturacion.value =
                    facturacionIgualEnvio.value == true
                        ? direccionEnvio.value
                        : "";
            }
        },
    });

    Survey.ComponentCollection.Instance.add({
        // A unique name; must use lowercase
        name: "codigoHtml",
        // A display name used in the Toolbox
        title: "Codigo Html",
        // A JSON schema for the base question type (Dropdown in this case)
        questionJSON: {
            type: "html",
            html: '<h1>Typography</h1><iframe height="300px" width="100%" src="https://es.wikipedia.org" name="iframe_a" title="Iframe Example"></iframe>',
        },
    });

    Survey.ComponentCollection.Instance.add({
        // A unique name; must use lowercase
        name: "sancion",
        // A display name used in the Toolbox
        title: "Sanción",
        // An array of JSON schemas that configure the nested questions
        elementsJSON: [
            {
                type: "panel",
                name: "PanelSancion",
                elements: [
                    {
                        type: "checkbox",
                        name: "procede_sancion",
                        title: "No.1",
                        description:
                            "<p><strong>Descripci&oacute;n</strong>. Acreditar que se tiene elaborada el acta de integracion de la Comisi&oacute;n Mixta formuladora del Reglamento Interior de Trabajo.</p>\n\n<p><strong>Marco normativo.</strong> Art&iacute;culos 132 fracciones I y XXVIII y 424 fracci&oacute;n I de la Ley Federal del Trabajo.</p>\n\n<p><strong>Reincidencias en el incumplimiento</strong>. O</p>\n",
                        choices: [
                            {
                                value: "1",
                                text: "Procede sanción",
                            },
                        ],
                    },
                    {
                        type: "expression",
                        name: "descripcion",
                        visibleIf: "{procede_sancion} allof [1]",
                        title: "Descripción",
                        description:
                            "<p>Acreditar que se tiene elaborada el acta de integracion de la Comisi&oacute;n Mixta formuladora del Reglamento Interior de Trabajo.</p>\n",
                    },
                    {
                        type: "dropdown",
                        name: "gravedad",
                        visibleIf: "{composite.procede_sancion} allof [1]",
                        title: "Gravedad",
                        isRequired: true,
                        choices: [
                            {
                                value: "50",
                                text: "Leve",
                            },
                            {
                                value: "100",
                                text: "Grave",
                            },
                        ],
                    },
                    {
                        type: "expression",
                        name: "umas_sugeridos",
                        visibleIf: "{composite.procede_sancion} allof [1]",
                        title: "UMAs sugeridos por la LFT",
                        description: "<p>50 a 2501</p>\n",
                    },
                    {
                        type: "text",
                        name: "umas",
                        visibleIf: "{composite.procede_sancion} allof [1]",
                        title: "Número de UMAs",
                        isRequired: true,
                        inputType: "number",
                        min: 0,
                    },
                    {
                        type: "expression",
                        name: "multa",
                        visibleIf: "{composite.procede_sancion} allof [1]",
                        title: "Multa",
                        expression:
                            "({composite.gravedad})+(103.74*{composite.umas})",
                    },
                ],
            },
        ],
    });

    if (typeof element != "undefined" && element != null) {
        //Setea Survey Creator en Español
        SurveyCreator.localization.currentLocale = "es";

        //WIDGETS
        /*  window["surveyjs-widgets"].ckeditor(Survey);

        var ckEditor =
            Survey.CustomWidgetCollection.Instance.getCustomWidgetByName(
                "editor"
            );

        //Hide from toolbox
        ckEditor.showInToolbox = false;
        SurveyCreatorCore.PropertyGridEditorCollection.register({
            fit: function (prop) {
                return prop.type == "text" || prop.type == "html";
            },
            getJSON: function (obj, prop, options) {
                return {
                    type: "editor",
                };
            },
        });
        var questionDef =
            SurveyCreatorCore.SurveyQuestionEditorDefinition.definition
                .question;
        //Modify Question Editor. Remove title from general and add it as a tab.
        questionDef.tabs.push({ name: "title", index: 1 });
        var ind = questionDef.properties.indexOf("title");
        if (ind > -1) questionDef.properties.splice(ind, 1);
        //Create showdown markdown converter
        var converter = new showdown.Converter();
        function doMarkdown(survey, options) {
            //convert the markdown text to html
            var str = converter.makeHtml(options.text);
            if (str.indexOf("<p>") == 0) {
                //remove root paragraphs <p></p>
                str = str.substring(3);
                str = str.substring(0, str.length - 4);
            }
            //set html
            options.html = str;
        } */
        //FIN WIDGETS

        //Remueve una propiedad para todas las preguntas
        //Survey.Serializer.removeProperty("question", "visibleIf");

        //Remueve una propiedad para un tipo de pregunta en especifico
        //Survey.Serializer.getProperty("boolean", "title").visible = false;

        //Setea las opciones por default de Survey Creator
        const creatorOptions = {
            showLogicTab: true,
            questionTypes: [
                "text",
                "checkbox",
                "radiogroup",
                "dropdown",
                "comment",
                "matrix",
            ],
        };

        //Instancia Survey Creator
        const creator = new SurveyCreator.SurveyCreator(creatorOptions);

        //Elimina Propiedades de todas las preguntas
        const propertyStopList = ["maxWidth", "minWidth", "size", "width"];

        creator.onShowingProperty.add(function (sender, options) {
            options.canShow =
                propertyStopList.indexOf(options.property.name) == -1;
        });

        //CKEDITOR
        /* creator.survey.onTextMarkdown.add(doMarkdown);
        creator.onDesignerSurveyCreated.add(function (editor, options) {
            options.survey.onTextMarkdown.add(doMarkdown);
        });
        creator.onTestSurveyCreated.add(function (editor, options) {
            options.survey.onTextMarkdown.add(doMarkdown);
        }); */
        //FIN CKEDITOR

        //Renderiza Survey Creator
        creator.render("surveyCreator");
    }
});
