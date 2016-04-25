var gulp = require('gulp'),
	concat = require('gulp-concat');

require('./lint.js');

var bower = function(env) {
	gulp.task('copy-bower-' + env, function () {
		return gulp.src('./bower_components/**/*')
			.pipe(gulp.dest('./' + env + '/javascript'));
	});
};

module.exports = bower;