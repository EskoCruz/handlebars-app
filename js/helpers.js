/**
 * Created by esko on 10/9/15.
 */

Handlebars.registerHelper('getLanguageFilter', function (langId) {
	var queryParam = '';
	if (langId) {
		queryParam = '&language=' + Handlebars.escapeExpression(langId);
	}
	return new Handlebars.SafeString(queryParam);
});
