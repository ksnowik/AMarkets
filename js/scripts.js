$(document).ready(function() {
    var endDate = new Date(2024, 9, 31, 0, 0, 0);
	
	setInterval(function() {
		var currentDate = new Date();
		var secondsLeft = Math.floor((endDate - currentDate) / 1000);
		var days = Math.floor(secondsLeft / (24 * 60 * 60));
		var hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
		var minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
		$(".warning__counter .days").text(days);
		$(".warning__counter .hours").text(hours);
		$(".warning__counter .minutes").text(minutes);
	}, 1000);

	var cookieOptions = { expires: 1, path: '/' };
	$('.warning__close').on('click', function() {
		$('.warning').removeClass('active');
		$.cookie('visit', true, cookieOptions);
	});

	
	if ($.cookie('visit') == undefined) {
		$('.warning').addClass('active');
	}

	function getScrollWidth(){
		// create element with scroll
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	let bodyScrolled = 0;
	function showModal(modal){
		$(modal).addClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').addClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', getScrollWidth());
	}

	function hideModal(modal){
		$(modal).removeClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').removeClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', 0);
	}

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	$('.modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
	});

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
	});
});

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});