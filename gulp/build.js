var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
// var bulkify = require('bulkify');

gulp.task('build', function () {
    browserify('./src/main.js')
    .transform({global:true}, babelify.configure({
        // tells the Babel parser that the code uses React's JSX.
        presets: ["react"]
    }))
    .bundle()
    .pipe(source('warm.js'))
    .pipe(gulp.dest('./dist'))
});
