const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
const obfuscate = require('gulp-obfuscate');

gulp.task('comprime-imagem', function() {
    return gulp .src("/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"));
}) 

gulp.task('compile-sass', function() {
    return gulp.src('main.scss')
        .pipe(sass())
        .pipe(gulp.dest('/build'));
})

gulp.task('obfuscate-js', function () {
    return gulp.src('teste.js')
        .pipe(obfuscate());
});