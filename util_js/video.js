(function () {
	$('#dialogbtn').on('click', function () {
		$('#dialog').show();
	})

	$('.dialog-close').on('click', function () {
		$('#dialog').hide();	
	})
})();