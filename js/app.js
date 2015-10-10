/**
 * Created by esko on 10/8/15.
 */
(function () {

	registerPartial();
    renderPage();
    renderDogs();


	function registerPartial() {
		Handlebars.registerPartial('dog', $('#dog-template').html());
	}

    function renderPage() {
        var template = $('#index-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled(language);

        $('#main').html(rendered);

        $('#languageSwitch').on('click', function () {
            DogPack.switchLanguage();
        });

		//Reset Button
		$('#score').on('click', 'small', function () {
			DogPack.clearDogs();
			window.location.href = '?' + Handlebars.helpers.getLanguageFilter(window.language.langId);
		});
    }

    function renderDogs() {
        var template = $('#dogs-template').html(),
            compiled = Handlebars.compile(template),
			filteredDogs = DogPack.getFilteredDogs(DogPack.dogs),
            rendered = compiled({
				dogs: DogPack.getPaginatedDogs(filteredDogs),
				language: language
			});

        $('#theDogs').html(rendered);
		attachDogButtons();
		attachNotDogButtons();
		renderPages(filteredDogs);
    }

	function renderPages(dogs) {
		var template = $('#page-template').html(),
			compiled = Handlebars.compile(template),
			rendered = compiled({ dogs: dogs });
		$('#pagination').html(rendered);
	}

	function attachDogButtons() {
		$('.dog-button').on('click', function () {
			var id = $(this).closest('.dog-card').data('dog-id');
			DogPack.chooseDog(id);
			renderDogs();
		})
	}
	function attachNotDogButtons() {
		$('.not-dog-button').on('click', function () {
			var id = $(this).closest('.dog-card').data('dog-id');
			DogPack.chooseNotDog(id);
			renderDogs();
		})
	}

})();
