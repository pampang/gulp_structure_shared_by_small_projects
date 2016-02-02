////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 		= require('gulp');					// https://www.npmjs.com/package/gulp
var runSequence = require('gulp-run-sequence');		// https://www.npmjs.com/package/gulp-run-sequence

gulp.task('pack', function () {
	runSequence('del', 'build');
});