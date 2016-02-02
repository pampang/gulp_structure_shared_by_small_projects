////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');				// https://www.npmjs.com/package/gulp
var config 	= require('../config.js');
var cache 	= require('gulp-cached');		// https://www.npmjs.com/package/gulp-cached
var plumber = require('gulp-plumber');		// https://www.npmjs.com/package/gulp-plumber
var jshint 	= require('gulp-jshint');		// https://www.npmjs.com/package/gulp-jshint

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