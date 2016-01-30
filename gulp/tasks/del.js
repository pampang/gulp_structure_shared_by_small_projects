////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');
var config 	= require('../config.js');
var del 	= require('del');

gulp.task('del', function () {
	del( config.clean.src );
});