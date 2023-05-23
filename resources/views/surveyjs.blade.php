<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


       <!-- ... -->
       <script type="text/javascript" src="{{asset('surveyjs/knockout.js')}}"></script>

       <link href="https://unpkg.com/survey-knockout/defaultV2.min.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="{{asset('surveyjs/survey.core.js')}}"></script>
        <script type="text/javascript" src="{{asset('surveyjs/survey-knockout-ui.js')}}"></script>
        <!-- ... -->


    </head>
    <body style="background-color: #f3f3f3">
        <survey params="survey: model"></survey>

        <script>
            const surveyJson = {
                elements: [{
                    name: "FirstName",
                    title: "Enter your first name:",
                    type: "text"
                }, {
                    name: "LastName",
                    title: "Enter your last name:",
                    type: "text"
                }]
            }

            const survey = new Survey.Model(surveyJson);

            document.addEventListener("DOMContentLoaded", function() {
                ko.applyBindings({
                    model: survey
                });
            });


            function alertResults (sender) {
                const results = JSON.stringify(sender.data);
                alert(results);
            }
            survey.onComplete.add(alertResults);
        </script>
    </body>
</html>
