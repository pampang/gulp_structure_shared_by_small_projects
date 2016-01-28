var gulp 				= require('gulp');
var config 				= require('../config.js');
var changed 			= require('gulp-changed');
var imageminPngquant 	= require('imagemin-pngquant');

gulp.task('png', function () {
	return gulp.src( config.png.src )
		.pipe( changed( config.png.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminPngquant( config.imageminPngquant.setting )() )
		.pipe( gulp.dest( config.png.dest ) );
});