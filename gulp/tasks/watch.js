var gulp 	= require('gulp');
var config 	= require('../config.js');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
	browserSync.init( config.browserSync.setting );

	// watch *.ejs
	gulp.watch( config.ejs.watch, ['ejs'] );

	// watch *.scss
	gulp.watch( config.sass.watch, ['sass'] );

	// watch *.js
	gulp.watch( config.js.watch, ['js'] );

	// watch *.png
	gulp.watch( config.png.src, ['png'] );
});