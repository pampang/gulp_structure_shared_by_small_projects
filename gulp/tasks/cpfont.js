////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');			// https://www.npmjs.com/package/gulp
var path 	= require('path');			// nodeJs自带部件
var config	= require('../config');
var argv	= require('yargs').argv;	// https://www.npmjs.com/package/yargs

gulp.task('cpfont', function () {
	if( argv.f ){
		gulp.src( path.join( config.cpfont.src, argv.f + '.ttf' ) )
			.pipe( gulp.dest( config.cpfont.dest ) );
	} else {
		console.log('参数出错！输入"gulp cpfont -f [your font name]"');
	}
})