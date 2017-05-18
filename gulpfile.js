'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var source  = require('vinyl-source-stream');

gulp.task('sass', function () {
    return gulp.src('web/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/assets/css'));
});

gulp.task('js', function () {
    return gulp.src('web/assets/js/*.js')
        .pipe(gulp.dest('web/assets/js/dist'))
});

gulp.task('default', ['sass', 'js']);