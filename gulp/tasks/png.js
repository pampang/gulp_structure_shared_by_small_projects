////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 				= require('gulp');					// https://www.npmjs.com/package/gulp
var config 				= require('../config.js');
var changed 			= require('gulp-changed');			// https://www.npmjs.com/package/gulp-changed
var imageminPngquant 	= require('imagemin-pngquant');		// https://www.npmjs.com/package/imagemin-pngquant

gulp.task('png', function () {
	return gulp.src( config.png.src )
		.pipe( changed( config.png.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminPngquant( config.imageminPngquant.setting )() )
		.pipe( gulp.dest( config.png.dest ) );
});