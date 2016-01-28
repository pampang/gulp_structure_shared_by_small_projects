var gulp 	= require('gulp');
var config 	= require('../config.js');
var cache 	= require('gulp-cached');
var plumber = require('gulp-plumber');
var jshint 	= require('gulp-jshint');

gulp.task('js', function () {
	return gulp.src( config.js.src )
		.pipe(plumber({
	      	errorHandler: function (error) {
	        	console.log(error.message);
	        	this.emit('end');
	    }}))
	    .pipe( cache( 'js' ) )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') )
		.pipe( gulp.dest( config.js.dest ) );
});