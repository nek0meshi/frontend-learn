const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const scripts = () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

exports.scripts = scripts

exports.default = gulp.parallel(exports.scripts)
