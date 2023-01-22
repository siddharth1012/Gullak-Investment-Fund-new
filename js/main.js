(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);


$(function(){
    var tickerLength = $('.carousel-inner-data ul li').length;
    var tickerHeight = $('.carousel-inner-data ul li').outerHeight();
    $('.carousel-inner-data ul li:last-child').prependTo('.carousel-inner-data ul');
    $('.carousel-inner-data ul').css('marginTop',-tickerHeight);

    function moveTop(){
      $('.carousel-inner-data ul').animate({
        top : -tickerHeight
    },600, function(){
     $('.carousel-inner-data ul li:first-child').appendTo('.carousel-inner-data ul');
     $('.carousel-inner-data ul').css('top','');
 });

  }
  setInterval( function(){
      moveTop();
  }, 3000);
});

// Basic example
$(document).ready(function () {
    $('#dtBasicExample').DataTable({
      "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('.dataTables_length').addClass('bs-select');
  });