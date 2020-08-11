// @ts-nocheck
$(document).ready(function(){

// Banner Slider
$('.slide_banner').slick({
    arrows:false,
    dots:true,
    autoplay:true,
});
// Banner Slider
$('.service_slider').slick({
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 6000,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

});

// Mixit up
var config = document.querySelector('.filters');

const mixer = mixitup(config,{
  animation: {
              animateResizeContainer: false, // required to prevent column algorithm bug
              effects: 'fade',
              duration: 450
          },
    callbacks: {
        onMixEnd: function(state) {
            $('.filters .mix').css({ /*CSS or perhaps logic here to remove gaps*/ });
        }
    }
});