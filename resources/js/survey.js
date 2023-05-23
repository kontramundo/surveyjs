SurveyCreator.localization.currentLocale = "es";
Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
Survey.surveyLocalization.defaultLocale = "es";

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
        const direccionFacturacion = question.contentPanel.getQuestionByName(
            "direccionFacturacion"
        );
        const facturacionIgualEnvio = question.contentPanel.getQuestionByName(
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
                facturacionIgualEnvio.value == true ? direccionEnvio.value : "";
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
        html: 'h1>Typography</h1>\n        <hr>\n        <h1>Heading level 1</h1>\n        <h2>Heading level 2</h2>\n        <h3>Heading level 3</h3>\n        <h4>Heading level 4</h4>\n        <h5>Heading level 5</h5>\n        <h6>Heading level 6</h6>\n\n\n        <h2>Paragraph</h2>\n        <p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. In id risus quis purus mollis lobortis vel ac tellus. Nam pharetra lorem quis dui commodo dapibus. Curabitur aliquet sapien vitae ligula pretium sollicitudin. Sed sed magna eu risus placerat gravida non sit amet augue. Morbi volutpat lobortis imperdiet. Sed elit purus, commodo a mi in, condimentum sagittis urna. Etiam condimentum pharetra cursus. Aliquam erat volutpat. In vel diam nulla. Praesent faucibus augue quis dui vehicula, a consequat est fringilla. Sed nec nisi fermentum, maximus nunc ac, hendrerit lorem. Proin mollis metus in erat dictum egestas. Proin nec ipsum viverra, scelerisque nisi in, faucibus nulla.</p>\n        <p>Aliquam erat volutpat. Donec sagittis libero ac justo suscipit laoreet. Suspendisse ut sem vel augue vulputate sodales blandit sit amet metus. Quisque porta consectetur efficitur. Duis venenatis nisl in mollis convallis. Pellentesque quis accumsan orci. Nulla porta arcu quis laoreet sagittis. Aliquam erat volutpat. Suspendisse sagittis, turpis vel posuere suscipit, dolor nunc sodales est, quis cursus dui elit vel nisl.</p>\n        <p>Nunc accumsan molestie nisl non malesuada. In egestas tellus lectus, nec venenatis tellus pulvinar vel. Fusce consectetur sodales ante, sed vehicula mauris pulvinar non. Cras tempor ante nec nibh iaculis aliquet. In quis velit non dui dapibus tempus quis sed velit. Morbi a ornare sem. Maecenas ornare molestie ex, sed maximus lorem viverra at. In tincidunt vel purus et suscipit. Aenean aliquam neque et ipsum volutpat, eu laoreet justo vestibulum. Maecenas quam turpis, convallis id nibh efficitur, interdum volutpat elit. Suspendisse potenti. Nulla in vulputate massa.</p>\n        <p>Quisque laoreet tincidunt massa, non pulvinar eros euismod sit amet. Maecenas non lorem vitae lorem condimentum posuere. Maecenas ac lectus elit. Nullam feugiat scelerisque interdum. Nullam volutpat tincidunt viverra. Suspendisse egestas venenatis orci. Nunc vehicula ut dolor aliquet finibus.</p>\n        <p>Donec tempus vestibulum odio vel consectetur. Donec sed feugiat tortor. Mauris iaculis nunc in orci suscipit, vel egestas orci pulvinar. In dapibus tortor ornare, eleifend eros eu, suscipit neque. Morbi quis pellentesque turpis, sit amet imperdiet augue. Mauris porttitor congue imperdiet. Quisque aliquet id quam a placerat. Fusce maximus in nibh vel ultricies.</p>\n        <p>Normal, <abbr title="Abbreviations">abbr</abbr>, <del>del</del>, <dfn>dfn</dfn>, <em>em</em>, <ins>ins</ins>, <mark>mark</mark>, <s>strike through</s>, <small>small</small>, <strong>strong</strong>, <sub>sub</sub>, <sup>sup</sup>, <u>u</u></p>\n        <h3>Thai language</h3><!--for checking unicode/multi languages support-->\n        <p>กาญจน์ ซังเตผลักดันม้ง แฟนซีอิ่มแปร้ นายพรานยูโร เมคอัพ แรงใจซัพพลายเจ็ต ลอจิสติกส์ คีตกวีแหวว งั้นวิก ฟีดม้งโปรโมทตัวเองแพนดา เวสต์เอนทรานซ์ บรรพชนแบล็คภควัมปติซูฮก ตัวตนโมเดิร์นอัลมอนด์คาแร็คเตอร์ เซลส์แมน ศึกษาศาสตร์เก๋ากี้เช็งเม้งกระดี๊กระด๊าซิง มาม่าโลโก้ฟาสต์ฟู้ดคอมพ์</p>\n        <p>แอปเปิ้ลแมกกาซีนยาวี ไอซียูปัจเจกชนเป่ายิ้งฉุบไฮไลท์เตี๊ยม ซีรีส์กัมมันตะแม่ค้าโอเลี้ยงวิน เลิฟต่อยอดผลไม้ พงษ์ดิกชันนารีซูม นิรันดร์ไฟลต์โดมิโน คันธาระเทค ควีนแรงดูดโค้ชแมชชีน ก่อนหน้ารีสอร์ทฮ็อตด็อกเฝอเบลอ ราชานุญาตออร์เดอร์วอเตอร์รุสโซแซมบ้า ก๊วนเหมยโหลยโท่ยซินโดรมดยุค ซื่อบื้อมาร์จินสต๊อกแม่ค้าเฟรชชี่ เพรสโฮสเตสคลับลาเต้ ตัวเองแทคติคฟีเวอร์แอ๊บแบ๊วลิมิต เจล น้องใหม่ซีรีส์แบคโฮแอดมิชชั่นเบนโล</p>\n        <p>เฟอร์รี่ เยอบีราแรงผลักเดบิต ราเม็งซีรีส์วาริชศาสตร์แจ๊สสามช่า บึมหน่อมแน้ม แรลลี ไฟต์คอรัปชั่น โมเดิร์นซิตี้เอ็นจีโอป๊อกเซลส์แมน เปปเปอร์มินต์ ไลฟ์พงษ์ศิลปวัฒนธรรมล็อบบี้เทียมทาน ฮ่องเต้หลวงตาบลอนด์ แรงใจแมชชีนเทวาป๋าเธค โพลารอยด์โกลด์สเตชันบอมบ์หมั่นโถว แฮนด์จูนแอลมอนด์ งี้ป๋อหลอสังโฆสี่แยกโพสต์ จูนคอมเพล็กซ์แฟนตาซีเนิร์สเซอรี่ ซานตาคลอสผลไม้เนอะ</p>\n        <p>เตี๊ยมแพนดาโบว์ลิ่ง โนติสล้มเหลวแจมหมั่นโถวแจ็กเก็ต พลานุภาพแจ็กพอตโหงว เจ็ต เช็ก เทคโนแครตสุนทรีย์ ทิป จิ๊กซอว์เทียมทานสเตย์ทอล์คบาลานซ์ เพรียวบางเลคเชอร์โฟล์ค กรอบรูป พาสปอร์ตคอรัปชั่นเปโซแมชีนเกจิ มั้ย ยาวี โคโยตี้เลกเชอร์เรตถ่ายทำติ๋ม มั้ยแจ๊กพ็อต สปอร์ตเธค</p>\n        <p>เมี่ยงคำ โรแมนติกโทรโข่งไคลแมกซ์เยลลี่ วิวรุมบ้า เดอะ พลานุภาพยิวเสือโคร่งเยนไฟต์ เพลซโครนาเวสต์โหลน สวีทระโงกช็อต จุ๊ยคอนโด สามแยกเอาต์เฝอ เทรลเล่อร์รอยัลตี้แอปเปิ้ลซีรีส์แจ็กพ็อต ทำงานโค้ช สต็อกศิลปวัฒนธรรมศากยบุตร รีโมตดีเจสปอร์ตปฏิสัมพันธ์ ตุ๊กแม่ค้าซูฮกงี้ วอลซ์บ็อกซ์ป๊อปอาร์พีจีปฏิสัมพันธ์ วิภัชภาคลาติน</p>\n        <p>By <a href="http://lorem.in.th/" onclick="return false;">lorem.in.th</a></p>\n\n        <h2>Links</h2>\n        <p>These are links: <a href="?2017-06-2703%3A30%3A17" onclick="return false;">never visited link (just don\'t click or it will becomes visited)</a>, <a href=".">visited link</a>. Mouse hover to see effects.</p>\n\n        <h2>Lists</h2>\n        <h3>Unordered list</h3>\n        <ul>\n            <li>List item with a much longer description or more content.</li>\n            <li>List item</li>\n            <li>List item\n                <ul>\n                    <li>Nested list item</li>\n                    <li>Nested list item</li>\n                    <li>Nested list item</li>\n                </ul>\n            </li>\n            <li>List item</li>\n            <li>List item</li>\n            <li>List item</li>\n        </ul>\n        <h3>Ordered list</h3>\n        <ol>\n            <li>List item with a much longer description or more content.</li>\n            <li>List item</li>\n            <li>List item\n                <ol>\n                    <li>Nested List Item</li>\n                    <li>Nested List Item</li>\n                    <li>Nested List Item</li>\n                </ol>\n            </li>\n            <li>List item</li>\n            <li>List item</li>\n            <li>List item</li>\n        </ol>\n        <h3>Mixed</h3>\n        <ul>\n            <li>List item with a much longer description or more content.</li>\n            <li>List item</li>\n            <li>List item\n                <ol>\n                    <li>Nested list item</li>\n                    <li>Nested list item</li>\n                    <li>Nested list item</li>\n                </ol>\n            </li>\n            <li>List item</li>\n            <li>List item</li>\n            <li>List item</li>\n        </ul>\n        <ol>\n            <li>List item with a much longer description or more content.</li>\n            <li>List item</li>\n            <li>List item\n                <ul>\n                    <li>Nested List Item</li>\n                    <li>Nested List Item</li>\n                    <li>Nested List Item\n                        <ol>\n                            <li>Nested List Item</li>\n                            <li>Nested List Item</li>\n                            <li>Nested List Item\n                                <ol>\n                                    <li>Nested List Item</li>\n                                    <li>Nested List Item</li>\n                                    <li>Nested List Item\n                                        <ul>\n                                            <li>Nested list item</li>\n                                            <li>Nested list item</li>\n                                            <li>Nested list item</li>\n                                        </ul>\n                                    </li>\n                                </ol>\n                            </li>\n                        </ol>\n                    </li>\n                    <li>Nested List Item</li>\n                    <li>Nested List Item</li>\n                </ul>\n            </li>\n            <li>List item</li>\n            <li>List item</li>\n            <li>List item</li>\n        </ol>\n        <h3>Definition list</h3>\n        <dl>\n            <dt>Definition list</dt>\n            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                commodo consequat.</dd>\n            <dt>Lorem ipsum dolor sit amet</dt>\n            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                commodo consequat.</dd>\n        </dl>\n        <h3>Details &amp; Summary</h3>\n        <details>\n            <summary>Question 1</summary>\n            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#" onclick="return false;">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n            <details>\n                <summary>Related documents</summary>\n                <ul>\n                    <li><a href="#" onclick="return false;">Lorem ipsum dolor sit amet,  consectetuer adipiscing elit.</a></li>\n                    <li><a href="#" onclick="return false;">Aliquam tincidunt mauris eu  risus.</a></li>\n                    <li><a href="#" onclick="return false;">Lorem ipsum dolor sit amet,  consectetuer adipiscing elit.</a></li>\n                    <li><a href="#" onclick="return false;">Aliquam tincidunt mauris eu  risus.</a></li>\n                </ul>\n            </details>\n        </details>\n        <details>\n            <summary>Question 2</summary>\n            <p>Duis consequat metus et eros rutrum, interdum facilisis urna interdum. Etiam facilisis diam in libero varius ultricies id id est. Sed lacinia pellentesque sem vel sagittis.</p>\n        </details>\n\n        <h2>Blockquote</h2>\n        <blockquote>Those people who think they know everything are a great annoyance to those of us who do.<cite>Isaac Asimov</cite></blockquote>\n\n        <h2>Code</h2>\n        <p>This is inline code <code>&lt;div&gt;div element&lt;/div&gt;</code>. This is sample output <samp>sample</samp> And below is block code.</p>\n        <pre>\n&lt;div&gt;\n    div element\n    &lt;p&gt;paragraph&lt;/p&gt;\n&lt;/div&gt;</pre>\n        <p>The input keyboard <kbd>Ctrl</kbd>+<kbd>S</kbd>. This is variable: <var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>\n\n        <h2>Table</h2>\n        <table>\n            <thead>\n                <tr>\n                    <th>Table heading</th>\n                    <th>Table heading</th>\n                </tr>\n            </thead>\n            <tfoot>\n                <tr>\n                    <th>Table footer</th>\n                    <th>Table footer</th>\n                </tr>\n            </tfoot>\n            <tbody>\n                <tr>\n                    <td>Table data</td>\n                    <td>Table data</td>\n                </tr>\n                <tr>\n                    <td>Table data</td>\n                    <td>Table data</td>\n                </tr>\n                <tr>\n                    <td>Table data</td>\n                    <td>Table data</td>\n                </tr>\n                <tr>\n                    <td>Table data</td>\n                    <td>Table data</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <h2>Form elements</h2>\n        <form>\n            <fieldset>\n                <legend>Input types</legend>\n                    <p>\n                        <label for="input-type-color">Input Color</label><br>\n                        <input id="input-type-color" type="color">\n                    </p>\n                    <p>\n                        <label for="input-type-date">Input Date</label><br>\n                        <input id="input-type-date" type="date">\n                    </p>\n                    <p>\n                        <label for="input-type-datetime-local">Input Datetime-local</label><br>\n                        <input id="input-type-datetime-local" type="datetime-local">\n                    </p>\n                    <p>\n                        <label for="input-type-email">Input Email</label><br>\n                        <input id="input-type-email" type="email">\n                    </p>\n                    <p>\n                        <label for="input-type-file">Input File</label><br>\n                        <input id="input-type-file" type="file">\n                    </p>\n                    <p>\n                        <label for="input-type-hidden">Input Hidden</label><br>\n                        <input id="input-type-hidden" type="hidden">\n                    </p>\n                    <p>\n                        <label for="input-type-month">Input Month</label><br>\n                        <input id="input-type-month" type="month">\n                    </p>\n                    <p>\n                        <label for="input-type-number">Input Number</label><br>\n                        <input id="input-type-number" type="number">\n                    </p>\n                    <p>\n                        <label for="input-type-password">Input Password</label><br>\n                        <input id="input-type-password" type="password">\n                    </p>\n                    <p>\n                        <label for="input-type-range">Input Range</label><br>\n                        <input id="input-type-range" type="range">\n                    </p>\n                    <p>\n                        <label for="input-type-search">Input Search</label><br>\n                        <input id="input-type-search" type="search">\n                    </p>\n                    <p>\n                        <label for="input-type-tel">Input Tel</label><br>\n                        <input id="input-type-tel" type="tel">\n                    </p>\n                    <p>\n                        <label for="input-type-text">Input Text</label><br>\n                        <input id="input-type-text" type="text">\n                    </p>\n                    <p>\n                        <label for="input-type-time">Input Time</label><br>\n                        <input id="input-type-time" type="time">\n                    </p>\n                    <p>\n                        <label for="input-type-url">Input Url</label><br>\n                        <input id="input-type-url" type="url">\n                    </p>\n                    <p>\n                        <label for="input-type-week">Input Week</label><br>\n                        <input id="input-type-week" type="week">\n                    </p>\n\n            </fieldset>\n            <p>\n                <label fpr="input-type-text-readonly">Input Text read only</label><br>\n                <input id="input-type-text-readonly" type="text" readonly="">\n            </p>\n            <p>\n                <label><input type="radio" name="input-radio" value="1"> Input radio option 1</label><br>\n                <label><input type="radio" name="input-radio" value="2"> Input radio option 2</label>\n            </p>\n            <p>\n                <label><input type="radio" name="input-radio-disabled" value="1" disabled=""> Input radio option 1</label><br>\n                <label><input type="radio" name="input-radio-disabled" value="2" disabled=""> Input radio option 2</label>\n            </p>\n            <p>\n                <label><input type="checkbox"> Input checkbox 1</label><br>\n                <label><input type="checkbox"> Input checkbox 2</label>\n            </p>\n            <p>\n                <label><input type="checkbox" disabled=""> Input checkbox 1</label><br>\n                <label><input type="checkbox" disabled=""> Input checkbox 2</label>\n            </p>\n            <p>\n                <label for="input-textarea">Textarea</label><br>\n                <textarea id="input-textarea"></textarea>\n            </p>\n            <p>\n                <label for="input-textarea-disabled">Textarea disabled</label><br>\n                <textarea id="input-textarea-disabled" disabled=""></textarea>\n            </p>\n            <p>\n                <label for="input-textarea-readonly">Textarea readonly</label><br>\n                <textarea id="input-textarea-readonly" readonly=""></textarea>\n            </p>\n            <p>\n                <label for="input-select">Select box</label><br>\n                <select id="input-select">\n                    <optgroup label="Group1">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                    </optgroup>\n                    <optgroup label="Group2">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                    </optgroup>\n                    <option>out of optgroup</option>\n                </select>\n            </p>\n            <p>\n                <label for="input-select-multiple">Select multiple</label><br>\n                <select id="input-select-multiple" multiple="">\n                    <option>Use Ctrl+click to select multiple options</option>\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                </select>\n            </p>\n            <p>\n                <label for="input-select-disabled">Select disabled</label><br>\n                <select id="input-select-disabled" disabled="">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                </select>\n            </p>\n            <p>\n                <button type="button">Normal button</button>\n                <button type="submit" onclick="return false;">Submit button</button>\n                <button type="reset" onclick="return false;">Reset button</button>\n                <button type="button" disabled="">Disabled button</button>\n            </p>\n            <p>\n                <input type="button" value="Input normal button">\n                <input type="submit" value="Input submit button" onclick="return false;">\n                <input type="reset" value="Input reset button" onclick="return false;">\n                <input type="button" value="Input disabled button" disabled="">\n            </p>\n            <p>\n                <a class="button" href="#" onclick="return false;">Anchor button</a>\n                <a class="button disabled" href="#" onclick="return false;">Anchor disabled button</a>\n            </p>\n        </form>\n\n\n\n\n\n<iframe height="300px" width="100%" src="https://es.wikipedia.org" name="iframe_a" title="Iframe Example"></iframe>',
    },
});

const creatorOptions = {
    showLogicTab: true,
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

document.addEventListener("DOMContentLoaded", function () {
    creator.render("surveyCreator");
});
