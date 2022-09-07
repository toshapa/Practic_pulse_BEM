const gulp = require ('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const rename = require("gulp-rename")
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserslist = require('browserslist')
const autoPrefixer = require('gulp-autoprefixer')


gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    })
})

gulp.task('styles', () =>{
    return gulp.src('src/css/sass/*.+(scss|sass)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
          }))
          .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
})

gulp.task('watch', () => {
    gulp.watch('src/css/sass/**/*.+(scss|sass)', gulp.parallel('styles'))
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/*.js', { events: 'all' }).on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'))