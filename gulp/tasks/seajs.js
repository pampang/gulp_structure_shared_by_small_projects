var gulp 	= require('gulp');
var seajsCombo = require('gulp-seajs-combo');
var config 	= require('../config.js');

gulp.task('seajs', function () {
	return gulp.src( './app/js/src/a.js' )
		.pipe( seajsCombo() )
		.pipe( gulp.dest('./build/js/src') );
});