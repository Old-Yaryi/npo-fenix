$('.about-slider__item').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendArrows:'.about-slider__nav',
  speed: 400,
  responsive: [
    {
      breakpoint: 769,
      settings: {

        slidesToShow: 1
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
      breakpoint: 1000,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2
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
      breakpoint: 1000,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        // centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$(".about-link_more").on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass('active')
$(this).parent().find(".more").slideToggle();
});