// 设置背景高和宽
function setFullSreen(container){
    var h = $(window).height(),
        w = $(window).width();

    container.css({
        minHeight: h,
        width: w
    });
}

(function () {
	var index = $('.index');
	var lost = $('.lost');
	var gift = $('.gift');

	setFullSreen(index);
	setFullSreen(lost);
	setFullSreen(gift);
})();

(function () {
	var district = $('.index__district');
	var value = district.find('.value');

	district.find('select').on('change', function  () {
		value.html( $(this).val() );
	})
})();