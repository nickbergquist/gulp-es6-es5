'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const del = require('del');


/**
 * PATHS
 */
const paths = {
    //srcJs: './src/js/**/*.js',
    srcJs: './src/js/Test2.js',
    dirBuild: './build/'
};


/**
 * JAVASCRIPT
 */
gulp.task('dev-transpile-js', () => {
    return gulp.src(paths.srcJs) 
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dirBuild));
});

gulp.task('lint-js', () => {
    return gulp.src([paths.srcJs])
        .pipe(eslint())
        .pipe(eslint.format());
    //.pipe(eslint.failOnError());
});

gulp.task('pub-build-js', () => {
    return gulp.src(paths.srcJs) 
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dirBuild));
});


/**
 * UTILITIES
 */
// remove all processed assets
gulp.task('clean', () => {
    del(paths.dirBuild + '*');
});


/**
 * WATCH TASKS
 */
gulp.task('watch', () => {
    gulp.watch(paths.srcJs, ['dev-build']);
});

/**
 * MAIN TASKS
 */
gulp.task('default', ['dev-build', 'watch']);
gulp.task('dev-build', ['clean', 'lint-js', 'dev-transpile-js']);
gulp.task('pub-build', ['clean', 'pub-build-js']);
