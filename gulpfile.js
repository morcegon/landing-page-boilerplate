const {
  src,
  dest,
  parallel
} = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

const srcStylePath = './src/scss'

const appStylePath = './app/css'

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

exports.default = parallel(parseSass)