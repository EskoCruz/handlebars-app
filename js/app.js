/**
 * Created by esko on 10/8/15.
 */
(function () {


    renderPage();

    function renderPage() {
        var template = $('#index-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled(language);

        $('#main').html(rendered);

        $('#languageSwitch').on('click', function () {
            DogPack.switchLanguage();
        });
    }




})();