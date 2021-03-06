////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp = require('gulp');				// https://www.npmjs.com/package/gulp
var config = require('../config.js');
var changed = require('gulp-changed');	// https://www.npmjs.com/package/gulp-changed

// 将位于app中的不需要经过处理的文件，转移到build中
gulp.task('move', function () {
	for(var item in config.move){
		gulp.src( config.move[item].src )
			.pipe( changed( config.move[item].src ) )
			.pipe( gulp.dest(config.move[item].dest ) );
	}
})