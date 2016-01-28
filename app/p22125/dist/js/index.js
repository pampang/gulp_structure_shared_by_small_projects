var activitySwiper = new Swiper ('#activity-swiper', {
   loop: true,
   observer:true,
   observeParents:true,
   autoplayDisableOnInteraction : false,
   autoplay: 5000,
   // 如果需要分页器
   pagination: '#activity-swiper-pagination'
});

// 领取礼包弹窗
(function () {
	$('#getPresent').on('click', function () {
		$('.welfare').show();
	})

	$('.welfare__exit').on('click', function () {
		$('.welfare').hide();	
	})
})();