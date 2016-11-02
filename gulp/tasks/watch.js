////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');							// https://www.npmjs.com/package/gulp
var config 	= require('../config.js');
var browserSync = require('browser-sync').create();		// https://www.npmjs.com/package/browser-sync

gulp.task('watch', function () {
	browserSync.init( config.browserSync.setting );

	// // watch *.ejs
	// gulp.watch( config.ejs.watch, ['ejs'] );

	// watch *.scss
	gulp.watch( config.sass.watch, ['sass'] );

	// watch *.js
	gulp.watch( config.js.watch, ['js'] );

	// watch *.png
	gulp.watch( config.png.src, ['png'] );

	// watch *.jpg
	gulp.watch( config.jpg.src, ['jpg'] );

	// watch *.gif
	gulp.watch( config.gif.src, ['gif'] );

	// watch *.svg
	gulp.watch( config.svg.src, ['svg'] );

	// watch move
	for(var item in config.move){
		gulp.watch( config.move[item].watch, ['move'] );
	}

	// gulp.watch( moveWatch, ['move'] );
});
