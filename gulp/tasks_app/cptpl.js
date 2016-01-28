var gulp 	= require('gulp');
var path 	= require('path');
var config	= require('../config_app');
var argv	= require('yargs').argv;

gulp.task('cptpl', function () {
	// -s 代表模版名称，-d 代表目标文件夹名称
	if( argv.s && argv.d ){
		gulp.src( path.join( config.cptpl.src, argv.s, '**' ) )
			.pipe( gulp.dest( argv.d ) );
	} else {
		console.log('参数出错！输入"gulp cptpl -s [your tpl name] -d [your dest file name]"');
	}
})