$('.load-jQuery').click(function() {

    //centering function

    jQuery.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }

    $('.product-added').center();

    //hides
      $('.zoom-overlay').hide();

    //quick view

    $('.main-product-image-image').hover(function() {
        $(this).find('.zoom-overlay').show();
    }, function() {
        $('.zoom-overlay').hide();
    });

    //sliders


      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          arrows: true,
          centerMode: true,
          focusOnSelect: true
      });
        $('.product-zoom-image-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '.btn-prev',
            nextArrow: '.btn-next',
            autoplay: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

      $(".related-products-container").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows: true,
          prevArrow: '.btn-prev',
          nextArrow: '.btn-next',
          autoplay: true,
          responsive: [{
              breakpoint: 1024,
              settings: {
                  dots: false,
                  arrows: false,
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  dots: false,
                  arrows: false,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
      });




    $('.tabs ul').each(function() {

        var $active, $content, $links = $(this).find('a');

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function() {
            $(this.hash).hide();
        });


        $(this).on('click', 'a', function(e) {
            $active.removeClass('active');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('active');
            $content.show();

            e.preventDefault();
        });
    });

    //quantity

    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });






});
