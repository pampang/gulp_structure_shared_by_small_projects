////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');			// https://www.npmjs.com/package/gulp
var config 	= require('../config.js');
var path 	= require('path');			// nodeJS自带模块
var cache 	= require('gulp-cached');	// https://www.npmjs.com/package/gulp-cached
var plumber = require('gulp-plumber');	// https://www.npmjs.com/package/gulp-plumber
var data 	= require('gulp-data');		// https://www.npmjs.com/package/gulp-data
var ejs 	= require('gulp-ejs');		// https://www.npmjs.com/package/gulp-ejs

gulp.task('ejs', function () {
	return gulp.src( config.ejs.src )
		.pipe(plumber({
	      	errorHandler: function (error) {
	        	console.log(error.message);
	        	this.emit('end');
	    }}))
		.pipe(data(function(file) {
	    	return require(path.join(path.dirname(file.path), 'data/', path.basename(file.path, '.ejs') + '.json'));
	    }))
		.pipe( ejs() )
		.pipe( gulp.dest(config.ejs.dest) );
})