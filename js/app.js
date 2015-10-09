/**
 * Created by esko on 10/8/15.
 */
(function () {


    renderPage();
    renderDogs();

    function renderPage() {
        var template = $('#index-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled(language);

        $('#main').html(rendered);

        $('#languageSwitch').on('click', function () {
            DogPack.switchLanguage();
        });
    }

    function renderDogs() {
        var template = $('#dogs-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({dogs: DogPack.dogs, language: language});

        $('#theDogs').html(rendered);
    }

})();
