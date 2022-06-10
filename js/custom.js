$(document).ready(function(){
    // navbar-toggler
  $("header .navbar-toggler").click(function(){
    $(this).toggleClass('active');
    $(".navbar").toggleClass("show");
    $("body").toggleClass("overflow_body");
  });

  $('.navbar').on('hide.bs.dropdown', function (e) {
      if (e.clickEvent) {
        e.preventDefault();
      }
  });

  if ($(window).width() > 991) {  
    $('nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      $('body').addClass('overly-menu');
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      $('body').removeClass('overly-menu');
    });
  }

    // guide-video-sldier
    var swiper = new Swiper('.guide-video-sldier', {
        slidesPerView: 3,
        speed: 1500,	  
        spaceBetween: 30,
        centeredSlides: false,
        grabCursor: true,
        observer: true,
        observeParents: true,
        autoplay: {	
            delay: 2000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
          300: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          992: {
              slidesPerView: 2.5,
              spaceBetween: 20,
          },
          1200: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
    });

    // card-block-sldier
    var swiper = new Swiper('.card-block-sldier', {
        slidesPerView: 3,
        speed: 1500,	  
        spaceBetween: 30,
        centeredSlides: false,
        grabCursor: true,
        observer: true,
        observeParents: true,
        autoplay: {	
            delay: 2000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
          300: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              allowTouchMove: true,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
         },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            allowTouchMove: false,
          },
        }
    });

    // card-block-out-sldier
    var swiper = new Swiper('.card-block-out-sldier', {
      slidesPerView: 4.2,
      speed: 1500,	  
      spaceBetween: 30,
      centeredSlides: false,
      grabCursor: true,
      autoplay: {	
          delay: 2000,
          disableOnInteraction: false,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
      },
      breakpoints: {
        300: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.8,
          spaceBetween: 20,
       },
       992: {
          slidesPerView: 2.5,
          spaceBetween: 20,
       },
        1200: {
          slidesPerView: 3.7,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 4.2,
          spaceBetween: 30,
        },
      }
    });
    
});
