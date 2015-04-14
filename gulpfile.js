var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    mocha = require('gulp-mocha'),
    uglify = require('gulp-uglify');

gulp.task('vet', function () {
   return gulp.src('routes/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'))
});

gulp.task('test', ['vet'], function () {
   return gulp.src('tests/test.js', {read: false})
   .pipe(mocha({reporter: 'nyan'}));
});
