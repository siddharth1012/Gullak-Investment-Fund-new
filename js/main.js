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

var li = document.getElementById("paginated-list").getElementsByTagName("li");
      var paginationNumber = document.getElementById("pagination-numbers");
      var display = 10;
      var count = 1;
      var buttonCount = Math.ceil(li.length / display);

      for (let i = 1; i <= buttonCount; i++) {
          var button = document.createElement("button");
          button.innerHTML = i;
          paginationNumber.appendChild(button);
      }

      document.getElementById("next-button").addEventListener("click", next);
      document.getElementById("prev-button").addEventListener("click", prev);
      document.getElementById("prev-button").setAttribute("disabled", true);

      function main(pageNum) {
          var nextPage = display * pageNum;
          var prevPage = display * (pageNum - 1);
          for (let i = 0; i < li.length; i++) {
              li[i].style.display = "none";
              if (i < nextPage && i >= prevPage) {
                  li[i].style.display = "block";
              }
          }
      }

      main(1);


      var buttnNumbers = paginationNumber.getElementsByTagName("button");
      for (let i = 0; i < buttnNumbers.length; i++) {
          buttnNumbers[i].addEventListener("click", buttonClick);
      }
      buttnNumbers[count - 1].classList.add("active");

      function buttonClick() {
          buttnNumbers[count - 1].classList.remove("active");
          if (this.innerHTML == buttonCount) {
              document.getElementById("next-button").setAttribute("disabled", true);
              document.getElementById("prev-button").removeAttribute("disabled");
          }
          else if (this.innerHTML == 1) {
              document.getElementById("prev-button").setAttribute("disabled", true);
              document.getElementById("next-button").removeAttribute("disabled");
          }
          else {
              document.getElementById("next-button").removeAttribute("disabled");
              document.getElementById("prev-button").removeAttribute("disabled");
          }
          count = this.innerHTML;
          main(count);
          this.classList.add("active");
      }

      function next() {
          document.getElementById("prev-button").removeAttribute("disabled");
          if (count !== buttonCount) {
              buttnNumbers[count - 1].classList.remove("active");
              buttnNumbers[count].classList.add("active");
              count++;
          }
          if (count === buttonCount) {
              document.getElementById("next-button").setAttribute("disabled", true);
          }
          main(count);
      }

      function prev() {
          buttnNumbers[count - 1].classList.remove("active");
          buttnNumbers[count - 2].classList.add("active");
          document.getElementById("next-button").removeAttribute("disabled");
          if (count !== 1) {
              count--;
          }
          if (count === 1) {
              document.getElementById("prev-button").setAttribute("disabled", true);
          }
          main(count);
      }