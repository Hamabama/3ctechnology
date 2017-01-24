var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass+prefixer', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(gulp.dest('./en/assets/css/'))
    .pipe(gulp.dest('./ru/assets/css/'));
});


gulp.task('watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass+prefixer']);
});
