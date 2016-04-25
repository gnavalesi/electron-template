var gulp = require('gulp'),
	concat = require('gulp-concat');

require('./lint.js');

var javascript = function(env) {
	gulp.task('concat-js-' + env, function () {
		return gulp.src('./src/javascript/**/*.js')
			.pipe(concat('app.js'))
			.pipe(gulp.dest('./' + env + '/javascript'));
	});
};

module.exports = javascript;