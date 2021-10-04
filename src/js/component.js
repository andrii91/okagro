$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  if ($(window).scrollTop() > 0) {
    $('.nav').addClass('fixed');
  }


  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
  });

  if ($(window).width() < 1200) {
    $('.menu li a').click(function () {
      $('nav').removeClass('open');
    })
  }

  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
  });


  $('body').on('click touchstart', function () {
    const videoElement = document.getElementById('video-bg');
    if (videoElement.playing) {
      // video is already playing so do nothing 
    } else {
      // video is not playing
      // so play video now
      videoElement.play();
    }
  });



  var rev = $('.rev_slider');
  rev.on('init', function (event, slick, currentSlide) {
    var
      cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
      cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
      prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });

  rev.slick({
    speed: 1000,
    arrows: false,
    dots: false,
    focusOnSelect: true,
     prevArrow: '<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#fff"/></svg></button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
      return '';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        }
    }
  ]
    /*infinite: false,*/
  });



  rev.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.video_slider .slick-slide').find('video').trigger('pause').removeAttr('controls');
    $('.video_slider .slick-slide').find('.video-info').show()
    $('.video_slider .slick-slide').find('.play-btn').show()

    var video = $('.video_slider .slick-active').find('video').trigger('play').attr('controls', 'controls');
    $('.video_slider .slick-active').find('.video-info').hide()
    $('.video_slider .slick-active').find('.play-btn').hide()
  });
  
  
  $('.play-mobile').click(function(){
       $(this).parent().find('video').trigger('play').attr('controls', 'controls');
      $(this).parent().find('.video-info').hide();
      $(this).hide();
  })


  $('.speaker-slider').slick({
    rows: 2,
    slidesToShow: 4,
    prevArrow: '<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#1F134A"/></svg></button>',
    nextArrow: '<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#1F134A"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
    }
  ]
  });


  $('.logo-slider5').slick({
    rows: 3,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
    }
  ]
  });


  $('.program-link li a').click(function (e) {
    e.preventDefault();

    $('.program-link li a').removeClass('active');
    $(this).addClass('active');

    $('.content-item').removeClass('active');
    $($(this).attr('href')).addClass('active');

  })

  $('.scroll').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 100
    }, 300);

  });


  setTimeout(function () {
    $('input, select').styler();
  }, 100)

  $('input[name="package_type"]').change(function () {
    if ($(this).val() == 'Юридична особа') {
      $('.package_2-item').show();
    } else {
      $('.package_2-item').hide();
    }
  })

  $('.price-slider').slick({
    dots: false,
    infinite: false,
     prevArrow: '<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#fff"/></svg></button>',
    nextArrow: '<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#fff"/></svg></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
    },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.logo-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.arr-prev').click(function () {
    $('.logo-slider5').slick('slickPrev');
  })

  $('.arr-next').click(function () {
    $('.logo-slider5').slick('slickNext');
  })

  $('.arr-previnfo').click(function () {
    $('.logo-slider').slick('slickPrev');
  })

  $('.arr-nextinfo').click(function () {
    $('.logo-slider').slick('slickNext');
  })

  
  // Вешаем на прикосновение функцию handleTouchStart
document.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
           $('.program-link li a.active').parent().next().find('a').trigger('click');
          console.log('left')
        } else {
            $('.program-link li a.active').parent().prev().find('a').trigger('click');
          console.log('right')
            /* right swipe */
        }                       
    } else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
  
  
  $('.marquee').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true,
//	pauseOnHover: true
});
  
});
