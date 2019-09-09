const {
  src,
  dest,
  parallel,
  watch
} = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserify = require('gulp-browserify')

const srcPath = './src'
const appPath = './app'

const srcStylePath = srcPath + '/scss'
const srcScriptPath = srcPath + '/js'

const appStylePath = appPath + '/css'
const appScriptPath = appPath + '/js'

function parseSass() {
  return src(srcStylePath + '/*.scss')
    .pipe(sass({
      includePaths: [
        './node_modules/bulma/'
      ]
    }))
    .pipe(autoprefixer())
    .pipe(dest(appStylePath))
}

function parseScripts() {
  return src(srcScriptPath + '/*.js')
    .pipe(browserify())
    .pipe(dest(appScriptPath))
}

function copyFiles() {
  return src([
    srcPath + '/index.html'
  ], {
    base: srcPath + '/'
  })
    .pipe(dest(appPath))
}

function watchFiles() {
  watch(srcStylePath + '/*.scss', parseSass)
}

exports.default = parallel(
  parseSass,
  parseScripts,
  copyFiles,
  watchFiles
)
