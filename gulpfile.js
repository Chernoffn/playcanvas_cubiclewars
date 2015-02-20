var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('test', function() {
  var target = gulp.src('./spec/runner/runner.html');

  gulp.src([
      'third-party/playcanvas-latest.js',
      'spec/helper.js',
      'src/camera.js',
      'spec/camera_spec.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./spec/runner/out'));
  return null;
});

gulp.task('default', ['test']);
