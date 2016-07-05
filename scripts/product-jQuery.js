$(document).ready(function() {

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
      $('.product-overlay').hide();


    //quick view

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
    })

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

    $(".related-products-container").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        autoplay: true
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

});
