$(function() {
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    infinite: true,
  })

  $('.works__inner').slick({
    //infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button>',
    nextArrow: '  <button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
    //centerMode: true,
  })
})