/**
 * Created by esko on 10/11/15.
 */
var Handlebars = require('handlebars');


var data = {
	message: 'Handlebars is good with: ',
	places: [
		'the browser',
		'node',
		'gulp'
	]
};

var template = '{{message}}' +
	'{{#each places}}' +
		'{{^@first}}' +
		', ' +
		'{{/@first}}' +
		'{{this}}' +
	'{{/each}}';


var compiled = Handlebars.compile(template);

console.log(compiled(data));
