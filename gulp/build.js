var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var bulkify = require('bulkify');

gulp.task('js', function () {
  return gulp.src('./src/main.js')
    .pipe(browserify())
    .pipe(rename('warm.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});