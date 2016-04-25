var gulp = require('gulp'),
	concat = require('gulp-concat');

require('./lint.js');

var css = function(env) {
	gulp.task('copy-css-' + env, function () {
		return gulp.src(['./src/assets/css/**/*.css'])
			.pipe(gulp.dest('./' + env + '/assets/css'));
	});
};

module.exports = css;