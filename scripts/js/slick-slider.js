$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    speed: 1500,
    easing: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
    // variableWidth: true
  });
});
