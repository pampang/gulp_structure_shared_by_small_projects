////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 		= require('gulp');					// https://www.npmjs.com/package/gulp
var runSequence = require('gulp-run-sequence');		// https://www.npmjs.com/package/gulp-run-sequence
var config 		= require('../config.js');

gulp.task('build', function () {
	runSequence('sass', [/*'ejs',*/ 'js', 'img', 'move']);
});
