// npm init
// -to create a package.json file.

// npm install gulp gulp-sass sass --save-dev
// -to install gulp, gulp-sass for compiling and sass package to package.json as dev dependencies.

// gulp
// -to execute gulp.

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
