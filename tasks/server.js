var gulp = require('gulp'),
	javascript = require('./javascript'),
	bower = require('./bower'),
	css = require('./css'),
	gulpSequence = require('gulp-sequence'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	server = require('gulp-server-livereload'),
	watch = require('gulp-watch'),
	watchSequence = require('gulp-watch-sequence');

require('./lint.js');

javascript('server');
bower('server');
css('server');

gulp.task('server', ['build-server', 'watch-server'], function () {
	gulp.src('./server')
		.pipe(server({
			livereload: true,
			open: true
		}));
});

gulp.task('build-server', gulpSequence('clean-server', ['concat-js-server', 'copy-bower-server', 'copy-src-server']));

gulp.task('clean-server', function () {
	return gulp.src(['./server'])
		.pipe(clean());
});

gulp.task('copy-src-server', function () {
	return gulp.src(['./src/**/*', '!./src/javascript/**/*'])
		.pipe(gulp.dest('./server'));
});

gulp.task('copy-html-sever', function () {
	return gulp.src([])
});

gulp.task('watch-server', function () {
	var queue = watchSequence(300);

	// CSS
	watch('./src/assets/css/**/*.css', {
		name: 'css',
		emitOnGlob: false
	}, queue.getHandler('csslint', 'copy-css-server'));

	// Javascript
	watch('./src/javascript/**/*.js', {
		name: 'js',
		emitOnGlob: false
	}, queue.getHandler('jshint', 'concat-js-server'));

	// HTML
	watch('./src/**/*.html', {
		name: 'html',
		emitOnGlob: false
	}, queue.getHandler('copy-html-server'));

	// Bower
	watch('./bower.json', {
		name: 'bower',
		emitOnGlob: false
	}, queue.getHandler('copy-bower-server'));
});
