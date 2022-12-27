const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// pipe sass files to css file

function styleFiles(){
    return src("scss/*.scss")
    .pipe(sass())
    .pipe(dest("./css"));
}

// watch files changes
function watchTasks(){
    watch(["scss/*.scss"], styleFiles);
}

// exports changes to files
exports.default = series(styleFiles, watchTasks);