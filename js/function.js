$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
		if ($(window).width() > 767 ) {	// Если ширина экрана болше 767px
		    $('.first__screen').css({
		        minHeight: $(window).height() + 'px'
		    });
		}
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false                     ;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('.header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('.header').addClass('stiky');
    //             } else {
    //                     $('.header').removeClass('stiky');
    //             }
    //     });
    // });
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top + 50;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

    $('.bslider__wrap').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
        prevArrow: '.bslider__prev',
        nextArrow: '.bslider__next'
	});

	$('.o-slider__wrap').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
          {
          breakpoint: 730,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

 	$('.c-slider__wrap').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
          {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
          },
            {
            breakpoint: 420,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }]
    });

    $('.a-slider__wrap').slick({
        infinite: true,
        dots: false,
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '.a-slider__prev',
        nextArrow: '.a-slider__next'
    });

    $('input[type=tel]').inputmask("+7 ( 999 ) 999 - 99 - 99");

    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    });

    ymaps.ready(init);
    var myMap,
        myPlacemark,
        myPin;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [56.78814528, 60.61568814],
            zoom: 16
        });

        myMap.controls
            .remove('geolocationControl')
            .remove('searchControl')
            .remove('trafficControl')
            .remove('typeSelector')
            .remove('fullscreenControl')
            .remove('zoomControl')
            .remove('rulerControl');

        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
        ]);

        myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/point.png',
            iconImageSize: [41, 62],
            iconImageOffset: [-13, -59]
        });

        myPlacemark = new ymaps.Placemark([56.78808640, 60.61575252], { 
            // balloonContentHeader: 'ДИФВЕНТ',
            balloonContentHeader: '<span class="maps__logo">ДИФВЕНТ</span>',
            balloonContentBody: 'Кондиционирование, вентиляция',
            balloonContentFooter: 'под ключ',
            hintContent: 'ДИФВЕНТ'
        });

        myPin.add(myPlacemark);
        myMap.geoObjects.add(myPin);
    }

});