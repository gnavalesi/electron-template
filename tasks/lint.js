var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	csslint = require('gulp-csslint');

gulp.task('lint', ['jshint', 'csslint']);

// JSHint
gulp.task('jshint', function () {
	return gulp.src('./src/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
});

// CSSHint
gulp.task('csslint', function () {
	return gulp.src('./src/assets/css/**/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});