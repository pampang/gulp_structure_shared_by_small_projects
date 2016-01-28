////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');
var config 	= require('../config.js');

gulp.task('default', function () {
	gulp.run('build');
	gulp.run('watch');
});