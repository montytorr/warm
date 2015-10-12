var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');   // Transforms React JSX to JS
var source = require('vinyl-source-stream');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
// var bulkify = require('bulkify');

gulp.task('build', function () {
    browserify('./src/main.js')
    .transform({global:true}, reactify)
    .bundle()
    .pipe(source('warm.js'))
    .pipe(gulp.dest('./dist'))
});
