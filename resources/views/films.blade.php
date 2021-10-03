<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Films</title>

        <link href="{{ URL::asset('css/app.css'); }} " rel="stylesheet">

    </head>
    <body>
        <section class="b--section-a">
            <div class="f--container">
                <div class="f--row">
                    <div class="f--col-8 f--offset-2 f--col-tabletp-12 f--offset-tabletp-0">
                        <h1 class="text-center">FILMS<H1>
                    </div>
                </div>
                <div class="f--row">
                    <div class="f--col-8 f--offset-2 f--col-tabletp-12 f--offset-tabletp-0">
                        <div class="b--form-group-a f--mt-72">
                            <search></search>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script type="text/javascript" src="{{ URL::asset('js/app.js'); }}"></script>

    </body>
</html>