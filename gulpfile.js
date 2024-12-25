const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') //pega todos os arquivos .scss dentro dessa pasta
        .pipe(sass({outputStyle: 'compressed'})) //define que o tipo de saida dos arquivos vai ser comprimido, melhora performance
        .pipe(gulp.dest('./dist/css')); //define local que os arquivos de saida irão
}

function images() {
    return gulp.src('./src/images/**/*') //pega todos as pastas e todos os arquivos dentro delas
        .pipe(imagemin()) //define que o tipo de saida dos arquivos vai ser comprimido, melhora performance
        .pipe(gulp.dest('./dist/images')); //define local que os arquivos de saida irão
}

exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}