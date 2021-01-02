// @ts-nocheck

window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
});

// Back to top btn
$(function () {
    var $htmlbody = $('html,body');
    //Top to back
    $('.top-btm').click(function () {
        $($htmlbody).animate(
            {
                scrollTop: '0',
            },
            500
        );
    });

    //fade in fade out
    $(window).scroll(function () {
        var scrollValue = $(this).scrollTop();

        if (scrollValue >= 500) {
            $('.top-btm').fadeIn();
        } else {
            $('.top-btm').fadeOut();
        }
    });
});

// @ts-nocheck
$(document).ready(function () {
    // Banner Slider
    $('.banner__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        infinite: true,
    });

    // Banner Slider
    $('.service_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 18000,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // clients Slider
    $('.client_boxs').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1800,

        centerMode: true,
        centerPadding: '40px',
        // adaptiveHeight: true
        slidesToShow: 2,
        // slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                },
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
        ],
    });
});

// Mixit up
var config = document.querySelector('.filters');
// @ts-ignore
const mixer = mixitup(config, {
    animation: {
        animateResizeContainer: false, // required to prevent column algorithm bug
        effects: 'fade',
        duration: 450,
    },
    callbacks: {
        onMixEnd: function (state) {
            $('.filters .mix').css({
                /*CSS or perhaps logic here to remove gaps*/
            });
        },
    },
});

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
});
