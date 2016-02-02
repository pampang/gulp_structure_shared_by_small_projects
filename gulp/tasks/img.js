////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 		= require('gulp');					// https://www.npmjs.com/package/gulp
var config 		= require('../config.js');

gulp.task('build', ['png', 'jpg', 'svg', 'gif']);