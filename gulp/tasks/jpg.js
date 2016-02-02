////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 				= require('gulp');				// https://www.npmjs.com/package/gulp
var config 				= require('../config.js');
var changed 			= require('gulp-changed');		// https://www.npmjs.com/package/gulp-changed
var imageminMozjpeg 	= require('imagemin-mozjpeg');	// https://www.npmjs.com/package/imagemin-mozjpeg

gulp.task('jpg', function () {
	return gulp.src( config.jpg.src )
		.pipe( changed( config.jpg.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminMozjpeg( config.imageminMozjpeg.setting )() )
		.pipe( gulp.dest( config.jpg.dest ) );
});