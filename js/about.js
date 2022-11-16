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
// const swiper = new Swiper('.swiper', {
//   slidesPerView: 5,
//   // centeredSlides: true,
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 3,

//     },
//     415: {
//       slidesPerView: 3,
//     },
//     480: {
//       slidesPerView: 5,
//     },
//   }
// });