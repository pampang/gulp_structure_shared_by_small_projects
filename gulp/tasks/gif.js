var gulp 				= require('gulp');
var config 				= require('../config.js');
var changed 			= require('gulp-changed');
var imageminGifsicle 	= require('imagemin-gifsicle');

gulp.task('gif', function () {
	return gulp.src( config.gif.src )
		.pipe( changed( config.gif.dest ) ) // 使用changed忽略未更改的文件
		.pipe( imageminGifsicle( config.imageminGifsicle.setting )() )
		.pipe( gulp.dest( config.gif.dest ) );
});