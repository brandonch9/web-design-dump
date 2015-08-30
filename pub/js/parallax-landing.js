$(window).scroll(function() {

	var wScroll = $(this).scrollTop();
	
	if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
		console.log('oh it\'s lit')
		$('.clothes-pics img').each(function(i) {
			setTimeout(function() {
				$('.clothes-pics img').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});
	}
});