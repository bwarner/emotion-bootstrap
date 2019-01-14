const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');


const plugins = [
  ['@babel/proposal-object-rest-spread'],
];

const destination = 'dist';

const babelConfig = {
  sourceMap:true,
  minified: true,
};
const babelTransform = babel(babelConfig);

const buildWithMaps = (done) => {
  gulp.src('vendor/*.js')
  .pipe(babelTransform.on('error', console.log))
  .pipe(gulp.dest(destination));

  done();
};


function build (done) {
  gulp.src('vendor/**/*.js')
  .pipe(babelTransform)
  .pipe(gulp.dest(destination));
  done();
}

function clean(done) {
  del([`${__dirname}/dist/**`], done);
}

function watch() {
  gulp.watch(['vendor/**/*.js', 'package.json'], function () {
    gulp.run('build');
  });
}

gulp.task('default', gulp.series(build));

gulp.task('build-with-maps', gulp.series(buildWithMaps));

gulp.task('build', gulp.series(build));

gulp.task('clean', gulp.series(clean));

gulp.task('watch', gulp.series(watch));
