var gulp = require('gulp'),
	minify_css = require('gulp-clean-css');

gulp.task('minify', ['minify-css', 'minify-js']);

// Minify CSS
gulp.task('minify-css', function () {
	return gulp.src('./src/assets/css/**/*.css')
		.pipe(minify_css({compatibility: 'ie8'}))
		.pipe(gulp.dest('.tmp/minify/css'));
});

// Minify JS
gulp.task('minify-js', function () {

});