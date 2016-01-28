////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 				= require('gulp');
var config 				= require('../config.js');
var changed 			= require('gulp-changed');
var imageminMozjpeg 	= require('imagemin-mozjpeg');

gulp.task('jpg', function () {
	return gulp.src( config.jpg.src )
		.pipe( changed( config.jpg.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminMozjpeg( config.imageminMozjpeg.setting )() )
		.pipe( gulp.dest( config.jpg.dest ) );
});