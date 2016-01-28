(function(){
	$('.banner__home').on('click', function () {
		$('.nav').toggle();
	});

	$('.nav__exit').on('click', function () {
		$('.nav').hide();
	})
})();