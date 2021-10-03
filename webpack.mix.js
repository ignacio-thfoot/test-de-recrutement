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
mix.setPublicPath('./dist');
del('dist/css/*.css');
del('dist/js/*.js');
mix.js('resources/js/app.js', 'dist/js').vue();
mix.sass('resources/scss/entries/app.scss', 'dist/css');

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