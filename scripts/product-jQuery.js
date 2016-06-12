$(document).ready(function() {

  $('.main-product-image').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slideshow-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});


});
