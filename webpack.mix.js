const mix = require('laravel-mix');
const del = require('del');
require('laravel-mix-serve');


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