const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['build']);


gulp.task('build-with-maps', () => {
  gulp.src('vendor/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['env'],
    plugins: [
      ['transform-object-rest-spread',
        { useBuiltIns: true }],
    ],
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist'));

  gulp.src('vendor/**/*.js.map')
  .pipe(gulp.dest('dist/vendor'));
});

gulp.task('build', () => {
  gulp.src('vendor/**/*.js')
  .pipe(babel({
    presets: ['env'],
    plugins: [
      ['transform-object-rest-spread',
        { useBuiltIns: true }],
    ],
  }))
  .pipe(gulp.dest('dist'));

});

gulp.task('clean', (done) => {
  del([`${__dirname}/dist/**`], done);
});

gulp.task('watch', () => {
  gulp.watch(['vendor/**/*.js', 'package.json'], function () {
    gulp.run('build');
  });
});
