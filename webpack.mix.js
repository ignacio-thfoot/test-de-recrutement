const mix = require('laravel-mix');
const del = require('del');
require('laravel-mix-serve');


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