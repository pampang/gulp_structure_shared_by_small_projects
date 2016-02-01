////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');
var argv	= require('yargs').argv;
var config 	= require('../config.js');

gulp.task('default', function () {
	if( argv.h || argv.help ){
		return gulp.run('help');
	};
	
	console.log('您可以输入gulp -h 或 gulp --help 来查看更多命令帮助。');
	
	gulp.run('build');
	gulp.run('watch');
});