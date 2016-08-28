var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function() {
    var scssStream = gulp.src('assets/sass/theme.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('assets/css'))
        .pipe(reload({ stream:true }));

    return scssStream;
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: true,
        port: 8080
    });

    gulp.watch('assets/sass/*.scss', ['sass']);
    gulp.watch('**/*.html').on('change', reload);
    gulp.watch('**/*.js').on('change', reload);
});
