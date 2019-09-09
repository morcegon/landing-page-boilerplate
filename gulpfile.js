const {
  src,
  dest,
  parallel,
  watch
} = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

const srcPath = './src'
const appPath = './app'

const srcStylePath = srcPath + '/scss'

const appStylePath = appPath + '/css'

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
  copyFiles,
  watchFiles
)