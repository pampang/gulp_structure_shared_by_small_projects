////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 		= require('gulp');
var runSequence = require('gulp-run-sequence');
var config 		= require('../config.js');

gulp.task('build', function () {
	runSequence('sass', ['ejs', 'js', 'png', 'move']);
});