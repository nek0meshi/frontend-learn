const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

const SCRIPTS_TARGET_FILES = [
  'src/**/*.js',
]
const STYLES_TARGET_FILES = [
  'src/**/*.sass',
]

const scripts = () => {
  return gulp.src(SCRIPTS_TARGET_FILES)
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

const styles = () => {
  return gulp.src(STYLES_TARGET_FILES)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'))
}

const defaultFunc = gulp.parallel(
  scripts,
  styles
)

const watch = gulp.series(
  defaultFunc,
  gulp.parallel(
    function watchScripts() {
      gulp.watch(SCRIPTS_TARGET_FILES, scripts)
    },
    function watchStyles() {
      gulp.watch(STYLES_TARGET_FILES, styles)
    }
  )
)

exports.scripts = scripts

exports.styles = styles

exports.watch = watch

exports.default = defaultFunc
