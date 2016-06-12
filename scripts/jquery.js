$(document).ready(function(){


  $('.slideshow').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: 'slick-dots',
    arrows: false,
    dots: true,
  });

  $('.product-overlay').hide();
  $('.curtain').hide();

  $('.products').hover(function() {
    $('.products').css('box-shadow', '0px 0px 4px 4px rgba(0,0,0,.15)');
    $('.product-overlay').show();
  }, function() {
    $('.products').css('box-shadow', '0px 0px 6px 0px rgba(0,0,0,.15)');
    $('.product-overlay').hide();
  });

  $('.quick-view').hover(function() {
    $(this).css({'background': 'rgba(255,255,255,.8)', 'color': 'black'})
  }, function() {
    $(this).css({'background': 'rgba(0,0,0,0)', 'color': 'white'})
  })

  $('.quick-view').on('click',function() {
    $('.curtain').show();
  });

  $('.curtain').on('click',function() {
    $('.curtain').hide();
  });


});
