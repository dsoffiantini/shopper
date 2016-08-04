angular.module("shopper").directive('slickSlider',function($timeout){
 return {
   restrict: 'A',
   link: function(scope,element,attrs) {
     $timeout(function() {
         $(element).slick(scope.$eval(attrs.slickSlider));
         $('.products').hover(function() {
             $(this).css('box-shadow', '0px 0px 4px 4px rgba(0,0,0,.15)');
             $(this).find('.product-overlay').show();
         }, function() {
             $('.products').css('box-shadow', '0px 0px 6px 0px rgba(0,0,0,.15)');
             $('.product-overlay').hide();
         });

         $('.quick-view').hover(function() {
             $(this).css({
                 'background': 'rgba(255,255,255,.8)',
                 'color': 'black'
             })
         }, function() {
             $(this).css({
                 'background': 'rgba(0,0,0,0)',
                 'color': 'white'
             })
         });

         $('.main-product-image-image').hover(function() {
             $(this).find('.zoom-overlay').show();
         }, function() {
             $('.zoom-overlay').hide();
         });


     });
   }
 }
});
