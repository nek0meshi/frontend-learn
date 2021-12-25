const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

const scripts = () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

const styles = () => {
  return gulp.src('src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
}

exports.scripts = scripts

exports.styles = styles

exports.default = gulp.parallel(
  scripts,
  styles
)
