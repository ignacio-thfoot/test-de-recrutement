const mix = require('laravel-mix');
const del = require('del');
require('laravel-mix-serve');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('./public');
del('public/css/*.css');
del('public/js/*.js');
mix.js('resources/js/app.js', 'public/js').vue();
mix.sass('resources/scss/entries/app.scss', 'public/css');

mix.browserSync({
    'port': 8000,
	files: [
		'resources/views',
		'resources/assets',
		'app',
        'resources/css',
        'resources/js'
	],
});

mix.serve();