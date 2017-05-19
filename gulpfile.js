const gulp = require('gulp')
const sass  = require('gulp-sass')

gulp.task('sass', function () {
    return gulp.src('web/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/assets/css'));
});

gulp.task('js', function () {
    return gulp.src('web/assets/js/*.js')
        .pipe(gulp.dest('web/assets/js/dist'))
});

gulp.task('default', ['sass', 'js'])