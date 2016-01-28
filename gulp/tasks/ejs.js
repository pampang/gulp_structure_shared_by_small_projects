////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp 	= require('gulp');
var config 	= require('../config.js');
var path 	= require('path');
var cache 	= require('gulp-cached');
var plumber = require('gulp-plumber');
var data 	= require('gulp-data');
var ejs 	= require('gulp-ejs');

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