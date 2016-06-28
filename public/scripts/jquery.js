$(document).ready(function() {


    jQuery.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }

    $(".slideshow").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".products-container").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        autoplay: true
    });

    $(".products-container-2").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        autoplay: true
    });

    $(".products-container-3").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        autoplay: true
    });


    // $(".brands").slick({
    //   slidesToShow: 3,
    //         slidesToScroll: 3,
    //         dots: true,
    //         prevArrow: '.btn-prev',
    //         nextArrow: '.btn-next'
    // });


    // ---Hides---

    $('.product-overlay').hide();
    $('.curtain').hide();
    $('.top-nav ul ul').hide();
    $('.cart-content').hide();

    // ---Nav---

    $('.top-nav li').hover(function() {
        $(this).find('ul').show().css('display', 'flex');
    }, function() {
        $(this).find('ul').hide();
    });

    $('.cart').hover(function() {
        $('.cart-content').slideDown();
    }, function() {
        $('.cart-content').hide();
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.top-nav').css('position', 'fixed');
        } else {
            $('.top-nav').css('position', 'relative');
        }
    });

    // var cartwidth = $('.cart-content').width();
    //
    //
    // $('.cart-content').css("left", -cartwidth);




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

    // ---Center Modal---

    $.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", ($(window).height() - this.height()) / 2 + "px");
        this.css("left", ($(window).width() - this.width()) / 2 + "px");
        return this;
    }
    $('.curtain').center();
    $(window).resize(function() {
        $('.curtain').center();
    });

    // ---Open/Close Modal---

    $('.quick-view').on('click', function() {
        $('.curtain').show();
    });

    $('.close-modal').on('click', function() {
        $('.curtain').hide();
    });

    // $('.modal').center();



    // ---Back to Top---
    var amountScrolled = 300;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
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
