/**
 * Created by esko on 10/11/15.
 */
var gulp = require('gulp');

module.exports = function () {
	gulp.watch('./templates/*.hbs', ['templates'])
};
