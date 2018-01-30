$(function() {

	// JS slider "Swiper"
	// API - http://idangero.us/swiper/api/#.V_AP5uiLSUk

	// init ".about-section" slider
	var mySwiper = new Swiper ('.about-section .swiper-container', {
		loop: true,
		speed: 800,
		pagination: '.about-section .swiper-pagination',
		paginationClickable: true,
		/*autoplay: 0,*/
		autoplay: 2000,
		autoplayDisableOnInteraction: false
	});

	// init ".features-slider" slider
	var mySwiper_features = new Swiper ('.features-slider .swiper-container', {
		spaceBetween: 30,
		speed: 800,
		initialSlide: 1,
		nextButton: '.features-slider .swiper-button-next',
		prevButton: '.features-slider .swiper-button-prev',
		pagination: '.features-slider .swiper-pagination',
		paginationClickable: true
	});

	mySwiper_features
		.on('slideNextStart', function() {
			if($('.swiper-slide--third').hasClass('swiper-slide-active')) {
				$('.swiper-button-disabled').next().addClass('swiper-button-hide-text');
				$('.features-slider').addClass('features-slider--makler');
			} else {
				$('.swiper-button-prev').prev().removeClass('swiper-button-hide-text');
				$('.features-slider').removeClass('features-slider--client');
			}
		})
		.on('slidePrevStart', function() {
			if($('.swiper-slide--first').hasClass('swiper-slide-active')) {
				$('.swiper-button-disabled').prev().addClass('swiper-button-hide-text');
				$('.features-slider').addClass('features-slider--client');
			} else {
				$('.swiper-button-next').next().removeClass('swiper-button-hide-text');
				$('.features-slider').removeClass('features-slider--makler');
			}
		});

	// init ".screens" slider
	var mySwiper_screens = new Swiper ('.screens .swiper-container', {
		spaceBetween: 30,
		speed: 800,
		pagination: '.screens .swiper-pagination',
		nextButton: '.screens .swiper-button-next',
		prevButton: '.screens .swiper-button-prev',
		paginationClickable: true
	});


	// init ".reviews" slider
	var mySwiper_reviews = new Swiper ('.reviews .swiper-container', {
		loop: true,
		spaceBetween: 30,
		speed: 1000,
		pagination: '.reviews .swiper-pagination',
		paginationClickable: true,
		autoplay: 2000,
		/*autoplay: 0,*/
		autoplayDisableOnInteraction: false,
		breakpoints: {
			1199: {
				spaceBetween: 0
			}
		}
	});

	// scroll to ".features-slider"
	$('.js--features').on('click', function() {
		$('.navigation-burger').trigger('click');
		$('.page').scrollTo($('.features-slider'), {
			duration: 800,
			easing: 'easeOutCubic',
			offset: {
				top: -70
			}
		});
	});

	// scroll to ".screens"
	$('.js--screens').on('click', function() {
		$('.navigation-burger').trigger('click');
		$('.page').scrollTo($('.screens'), {
			duration: 800,
			easing: 'easeOutCubic',
			offset: {
				top: -50
			}
		});
	});

	// scroll to ".reviews"
	$('.js--reviews').on('click', function() {
		$('.navigation-burger').trigger('click');
		$('.page').scrollTo($('.reviews'), {
			duration: 800,
			easing: 'easeOutCubic'
		});
	});

	// scroll to ".top-faq"
	$('.js-faq').on('click', function() {
		$('.navigation-burger').trigger('click');
		$('.page').scrollTo($('.top-faq'), {
			duration: 800,
			easing: 'easeOutCubic',
			offset: {
				top: -50
			}
		});
	});

	// scroll to ".service-benefits"
	$('.js--learn-more').on('click', function() {
		$('.page').scrollTo($('.service-benefits'), {
			duration: 800,
			easing: 'easeOutCubic',
			offset: {
				top: -50
			}
		});
	});

	// highlighted text on store hover
	var storeLinks = $('.store-links');
	$('.js--store-link').hover(
		function() {
			storeLinks.addClass('store-links--highlighted-text');
		},
		function() {
			storeLinks.removeClass('store-links--highlighted-text');
		}
	);

	// Check to see if the window is top if not then display button
	$('.page').on('scroll',function() {
		if(window.innerWidth >= 768) {
			if ($(this).scrollTop() > 100) {
				$('.js--button-scroll-top').fadeIn();
			} else {
				$('.js--button-scroll-top').fadeOut();
			}
		}
	});

	// Click event to scroll to top
	$('.js--button-scroll-top').click(function() {
		$('.page').scrollTo(0, {
			duration: 800,
			easing: 'easeOutCubic'
		})
	});

	// add class to modal parent to manipulate visibility of headline
	$('.js--default-button--presentation-request').on('click', function() {
		$('.remodal--demo-request').addClass('remodal--presentation');
	});

	// remove calss from modal parent
	$(document).on('closed', '.remodal', function() {
		$('.remodal--demo-request').removeClass('remodal--presentation');
	});

	$('.navigation-burger').clickToggle(
		function() {
			$('.main-header').addClass('is--showing');
		},
		function() {
			$('.main-header').removeClass('is--showing');
		}
	);

	// "send request" button event handler
	$('.default-button-border--send-request, .default-button-border--subscribe').on('click', function() {
		$(this).parent().find('input').val('');
		$(this).prop('disabled', true);
		$(this).addClass('is--success').delay(2000).queue(function() {
			$(this).removeClass('is--success').dequeue();
			$(this).prop('disabled', false);
		});
	});

});