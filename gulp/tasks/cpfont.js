var gulp 	= require('gulp');
var path 	= require('path');
var config	= require('../config');
var argv	= require('yargs').argv;

gulp.task('cpfont', function () {
	if( argv.f ){
		gulp.src( path.join( config.cpfont.src, argv.f + '.ttf' ) )
			.pipe( gulp.dest( config.cpfont.dest ) );
	} else {
		console.log('参数出错！输入"gulp cpfont -f [your font name]"');
	}
})