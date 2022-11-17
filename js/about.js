$('.about-slider__item').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendArrows:'.about-slider__nav',
  speed: 400,
  responsive: [
    {
      breakpoint: 768,
      settings: {

        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$('.about-sertificate__slider').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows:'.about-sertificate__nav',
  speed: 400,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.about-reviews__slider').slick({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows:'.about-reviews__nav',
  speed: 400,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
