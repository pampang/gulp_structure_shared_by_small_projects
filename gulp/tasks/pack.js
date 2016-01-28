var gulp 		= require('gulp');
var runSequence = require('gulp-run-sequence');
var config 		= require('../config.js');
var text		= require('./test.js');

gulp.task('output', function () {
	var i = 0;
	var len = text.length;
	setInterval(function () {
		if(i < len){
			console.log(text[i])
			i++;
		}
	}, 100);
})

gulp.task('pack', function () {
	runSequence('sass', ['ejs', 'js', 'png', 'move'], 'output');
});