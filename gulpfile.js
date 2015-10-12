/**
 * Created by esko on 10/11/15.
 */
var gulp = require('gulp'),
	watch = require('./gulp/watch'),
	templates = require('./gulp/templates');

gulp.task('watch', watch);
gulp.task('templates', templates);
