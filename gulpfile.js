'use strict';
// ----------------------------------------------------------------------------
// Base Paths
// ----------------------------------------------------------------------------

var config = {
    projectName: 'Oscar',
    path: {
		src: 'src/',
        assets: 'dev/assets/',
		dev: 'dev/'
    }
}

// ----------------------------------------------------------------------------
// Load Packages
// ----------------------------------------------------------------------------

console.time('Loading plugins...');
// General
var gulp = require('gulp'),
	plumber = require('gulp-plumber');

// Styles
var sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

console.timeEnd('Loading plugins...');
// ----------------------------------------------------------------------------
// Task Configuration
// ----------------------------------------------------------------------------

// SASS Compiler, Source Maps, Autoprefixer, Minifer
gulp.task('styles', function() {
	return gulp.src(config.path.src + 'scss/{,*/}/*.scss')
		.pipe(plumber(function(error) {
			console.log(error.message);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.path.assets + 'css/'))
});

// Watch Task
gulp.task("watch", function() {

	// Watch .scss files
	gulp.watch(config.path.src + 'scss/{,*/}*.scss', ['styles']);

});
