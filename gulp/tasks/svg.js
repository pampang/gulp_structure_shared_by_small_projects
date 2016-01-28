////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 				= require('gulp');
var config 				= require('../config.js');
var changed 			= require('gulp-changed');
var imageminSvgo 		= require('imagemin-svgo');

gulp.task('svg', function () {
	return gulp.src( config.svg.src )
		.pipe( changed( config.svg.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminSvgo( config.imageminSvgo.setting )() )
		.pipe( gulp.dest( config.svg.dest ) );
});