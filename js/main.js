$(function() {
  $('.slider__inner').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
  });

  $('.works__inner').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 456,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', () => {
    $('.header__menu>ul').slideToggle(); 
  });

  $('.header__drop-down.drop-down').on('click', function(){
    $(this).children('.drop-down__list').toggleClass('active');
    $(this).children('.drop-down__link').toggleClass('active');
  });
});