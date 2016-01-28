var gulp 	= require('gulp');
var config 	= require('../config.js');

gulp.task('default', function () {
	gulp.run('build');
	gulp.run('watch');
});