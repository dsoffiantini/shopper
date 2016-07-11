$(document).ready(function() {

    var windowHeight = $(window).height();
    var navHeight = $('.top-nav').height();
    var slideshowHeight = windowHeight - navHeight;

    $('.slideshow').css("height", slideshowHeight)

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

    var count = $(".cart-content").children().length;

    // if(count === 0) {
    //   $(".cart-content").append("<li>Your Cart is Empty</li>");
    // }
    // console.log(count)
    //
    // var cartCount = $(".cart-items").children().length;
    //
    // if(cartCount === 0) {
    //   $('.cart-cart').append("<content class="empty-cart"><h3>Your Cart is Empty :(</h3>You have no items in your Shopping Cart. Bummer.<br>Click <a href="/#/">here</a> to continue shopping.</content>");
    // }
    //
    // console.log(cartCount)


    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.top-nav').css('position', 'fixed');
        } else {
            $('.top-nav').css('position', 'relative');
        }
    });

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


    //list + grid buttons


    $('.list-button').click(function() {
      $('.category-product').css({"width": "100%", "justify-content": "space-between", "flex-direction": "row"});
      $('.category-product-image-container').css("width", "25%");
      $('.category-product-buttons > .product-button').css("width", "20vw");
      $('.category-product-buttons').css({"display": "flex", "flex-direction": "column", "padding": "10px"});
      $('.category-product-info').css({"width": "40%", "text-align": "left"})
      $('.category-product-description').css("display", "block");

    })

    $('.grid-button').click(function() {
      $('.category-product').css({"width": "300px", "justify-content": "space-between", "flex-direction": "column"});
      $('.category-product-image-container').css("width", "100%");
      $('.category-product-buttons').css("display", "none");
      $('.category-product-info').css({"width": "100%", "text-align": "center"});
      $('.category-product-description').css("display", "none");
    })



    //---Product Page---

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
