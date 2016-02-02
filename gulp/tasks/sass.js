////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 			= require('gulp');				// https://www.npmjs.com/package/gulp
var config 			= require('../config.js');
var cache 			= require('gulp-cached');		// https://www.npmjs.com/package/gulp-cached
var plumber 		= require('gulp-plumber'); 		// 防止compass编译出错的时候中断gulp进程。https://www.npmjs.com/package/gulp-plumber
var compass			= require('gulp-compass');		// https://www.npmjs.com/package/gulp-compass
var autoprefixer 	= require('gulp-autoprefixer');	// https://www.npmjs.com/package/gulp-autoprefixer

gulp.task('sass', function() {
	return gulp.src( config.sass.src )
		.pipe(plumber({                          // 此为gulp-compass中推荐的gulp-plumber写法。可登入https://www.npmjs.com/package/gulp-compass，全局字符搜索"plumber"了解更多。
	      	errorHandler: function (error) {
	        	console.log(error.message);
	        	this.emit('end');
	    }}))
		.pipe( cache( 'sass' ) )
		.pipe( compass( config.sass.setting ) )
		.pipe( autoprefixer( config.autoprefixer.setting ) )
		.pipe( gulp.dest( config.sass.dest ) );
});