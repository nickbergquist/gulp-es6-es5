'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');


/**
 * PATHS
 */
const paths = {
    srcJs: './src/js/**/*.js',
    dirBuild: './build/'
};


/**
 * JAVASCRIPT
 */
gulp.task('transpile-js', () => {
    // let gulp know this is an asynchronous event by returning
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
});


/**
 * UTILITIES
 */
// remove all processed assets
gulp.task('clean', () => {
    del([paths.dirBuild]);
});


/**
 * WATCH TASKS
 */
gulp.task('watch', () => {
	gulp.watch(paths.srcJs, ['lint-js', 'transpile-js']);
});

/**
 * MAIN TASKS
 */
gulp.task('default', ['dev-build', 'watch']);
gulp.task('dev-build', ['lint-js', 'transpile-js']);
