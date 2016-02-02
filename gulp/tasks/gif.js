////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 				= require('gulp');					// https://www.npmjs.com/package/gulp
var config 				= require('../config.js');
var changed 			= require('gulp-changed');			// https://www.npmjs.com/package/gulp-cached
var imageminGifsicle 	= require('imagemin-gifsicle');		// https://www.npmjs.com/package/imagemin-gifsicle

gulp.task('gif', function () {
	return gulp.src( config.gif.src )
		.pipe( changed( config.gif.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminGifsicle( config.imageminGifsicle.setting )() )
		.pipe( gulp.dest( config.gif.dest ) );
});