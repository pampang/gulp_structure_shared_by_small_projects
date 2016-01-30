////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 		= require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('pack', function () {
	runSequence('del', 'build');
});