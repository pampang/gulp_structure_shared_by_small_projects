////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp      = require('gulp');        // https://www.npmjs.com/package/gulp
var config      = require('../config.js');
var cache       = require('gulp-cached');   // https://www.npmjs.com/package/gulp-cached
var autoprefixer  = require('gulp-autoprefixer'); // https://www.npmjs.com/package/gulp-autoprefixer
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(cb) {
  console.log('sass start');
  sass(config.sass.src, config.sass.setting)
    .on('error', sass.logError)
    .pipe(cache('sass'))
    .pipe(autoprefixer(config.autoprefixer.setting))
    .pipe(gulp.dest(config.sass.dest));

  cb();
});
