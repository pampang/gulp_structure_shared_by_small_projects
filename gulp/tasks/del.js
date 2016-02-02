////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');			// https://www.npmjs.com/package/gulp
var config 	= require('../config.js');
var del 	= require('del');			// https://www.npmjs.com/package/del

gulp.task('del', function () {
	del( config.clean.src );
});