const gulp = require('gulp');
const babel = require('gulp-babel');

exports.default = () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist'))
}
