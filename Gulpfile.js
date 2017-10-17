'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    imageMin = require('gulp-imagemin'),
    pngQuant = require('imagemin-pngquant'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');


var path = {
    // куда
    build: {
        js: 'assets/js/dist/',
        img: 'assets/img/',
        css: 'assets/css/'
    },

    src: {
        js: 'assets/js/*.js',
        img: 'assets/img/src/*.*',
        style: 'assets/scss/style.scss'
    }
};

var config = {

    server: {
        baseDir: "/assets/"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('js:build', function() {

    gulp.src(path.src.js)
        .pipe(sourceMaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.js))

});

gulp.task('style:build', function() {

    gulp.src(path.src.style)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))

});

gulp.task('image:build', function() {
    gulp.src(path.src.img)
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()],
            interplaced: true
        }))
        .pipe(gulp.dest(path.build.img))
});

gulp.task('watch', function() {

    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });

});