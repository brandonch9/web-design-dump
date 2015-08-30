$(function() {
	$('.cta').click(function() {
		openModal();
		return false;
	});

	$('.close-btn').click(function() {
		closeModal();
	});

	$(window).keypress(function (event) {
		if (event.which == 27) {
			closeModal();
		}
	});

	$('.overlay').click(function (event) {
		if (this == event.target) {
			closeModal();
		}
	});
});

function openModal() {
	$('.overlay').addClass('is-open');
}

function closeModal() {
	$('.overlay').removeClass('is-open');
}