const gulp = require('gulp')
const sass  = require('gulp-sass')
const browserify = require('browserify');
const fs = require('fs');

gulp.task('sass', function () {
    return gulp.src('web/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/assets/css'));
});

gulp.task('js', function () {
    return gulp.src('web/assets/js/*.js')
        .pipe(gulp.dest('web/assets/js/dist'))
});

gulp.task('editor', () => {
   return browserify('web/editor/index.js')
       .transform('babelify', {presets: ['es2015', 'react']})
       .bundle()
       .pipe(fs.createWriteStream('web/editor/dist/editor.js'));
});

gulp.task('default', ['sass', 'js', 'editor'])
