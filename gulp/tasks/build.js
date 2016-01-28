var gulp 		= require('gulp');
var runSequence = require('gulp-run-sequence');
var config 		= require('../config.js');

gulp.task('build', function () {
	runSequence('sass', ['ejs', 'js', 'png', 'move']);
});