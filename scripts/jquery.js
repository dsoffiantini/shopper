$(document).ready(function(){


  $(".slideshow").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]
});

$(".products-container").slick({
  slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next'
});


  // ---Hides---

  $('.product-overlay').hide();
  $('.curtain').hide();


  // ---Nav---



  $('.products').hover(function() {
    $('.products').css('box-shadow', '0px 0px 4px 4px rgba(0,0,0,.15)');
    $(this).find('.product-overlay').show();
  }, function() {
    $('.products').css('box-shadow', '0px 0px 6px 0px rgba(0,0,0,.15)');
    $('.product-overlay').hide();
  });

  $('.quick-view').hover(function() {
    $(this).css({'background': 'rgba(255,255,255,.8)', 'color': 'black'})
  }, function() {
    $(this).css({'background': 'rgba(0,0,0,0)', 'color': 'white'})
  })

  // ---Center Modal---

  $.fn.center = function () {
     this.css("position","absolute");
     this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
     this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
     return this;
  }
  $('.curtain').center();
      $( window ).resize(function() {
         $('.curtain').center();
      });

  // ---Open/Close Modal---

  $('.quick-view').on('click',function() {
    $('.curtain').show();
  });

  $('.close-modal').on('click',function() {
    $('.curtain').hide();
  });



  // ---Back to Top---
  var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

$('.back-to-top-footer').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

});
