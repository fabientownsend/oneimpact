'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minicss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./source/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/assets/css'))
});

gulp.task('minicss', function() {
    gulp.src('./public/assets/css/*.css')
        .pipe(minicss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./public/assets/css'))
});

gulp.task('default', function() {
    gulp.watch('./source/scss/*.scss', ['sass', 'minicss']);
});
