const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', gulp.series(['sass']))
})
