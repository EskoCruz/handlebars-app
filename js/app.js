/**
 * Created by esko on 10/8/15.
 */
(function () {

    renderPage();
    renderDogs();


    function renderPage() {
        var rendered = App.templates.index(language);

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
        var filteredDogs = DogPack.getFilteredDogs(DogPack.dogs),
            rendered = App.templates.dogs({
				dogs: DogPack.getPaginatedDogs(filteredDogs),
				language: language
			});

        $('#theDogs').html(rendered);
		attachDogButtons();
		attachNotDogButtons();
		renderPages(filteredDogs);
		renderScore();
    }

	function renderPages(dogs) {
		var rendered = App.templates.dogs({ dogs: dogs });
		$('#pagination').html(rendered);
	}

	function renderScore() {
		var rendered = App.templates.score({
				dogs: DogPack.dogs,
				language: language
			});
		$('#score').html(rendered);
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
