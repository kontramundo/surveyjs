document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("surveyView");

    if (typeof element != "undefined" && element != null) {
        const surveyJson = {
            logoPosition: "right",
            pages: [
                {
                    name: "Página1",
                    elements: [
                        {
                            type: "pais",
                            name: "Pregunta1",
                        },
                        {
                            type: "direccionenvio",
                            name: "Pregunta2",
                        },
                    ],
                },
            ],
        };

        const survey = new Survey.Model(surveyJson);

        ko.applyBindings({
            model: survey,
        });

        function alertResults(sender) {
            const results = JSON.stringify(sender.data);
            alert(results);
        }
        survey.onComplete.add(alertResults);
    }
});
