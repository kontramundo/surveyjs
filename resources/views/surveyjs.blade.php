<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


        @vite(['resources/sass/app.scss', 'resources/js/app.js'])

        <script type="text/javascript" src="{{asset('surveyjs/knockout.js')}}"></script>
        <script type="text/javascript" src="{{asset('surveyjs/survey.core.js')}}"></script>
        <script type="text/javascript" src="{{asset('surveyjs/survey-knockout-ui.js')}}"></script>


    </head>
    <body style="background-color: #f3f3f3">
        <survey params="survey: model" id="surveyView"></survey>
    </body>
</html>
