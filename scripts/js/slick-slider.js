$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    easing: 'linear',
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    // variableWidth: true
  });
});
