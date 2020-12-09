//  Require Gulp into file and define the variable
var gulp = require('gulp');
var sass = require('gulp-sass');


function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}


function watch() {
    style();
    gulp.watch(paths.styles.src, style);
}

// Don't forget to expose the task!
exports.watch = watch;

var paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "css"
    }
};