// *****Языковое меню******
const lang = document.querySelector('.header__menu-link_language');
const lang_ul = document.querySelector('.header__menu-link_language-var');
lang.addEventListener('click', function(){
  lang_ul.classList.toggle('active')
});
const lang_mobile = document.querySelector('.mobile__info-social_language');
const lang_ul_mobile = document.querySelector('.mobile__info-social_language-var');
lang_mobile.addEventListener('click', function(){
  lang_ul_mobile.classList.toggle('active')
});
// *******Мобильное меню*******
const mobile_menu = document.querySelectorAll('.burger');
const mobile_menu_open = document.querySelector('.mobile');
const mobile_menu_close = document.querySelector('.mobile__close');
mobile_menu.forEach(el => {
    el.addEventListener('click', function(){
    mobile_menu_open.classList.toggle('mobile-active')
  });
});
mobile_menu_close.addEventListener('click', function() {
  mobile_menu_open.classList.toggle('mobile-active')
});
// *******jquerry_slider-header****
$('.header-slider').slick({
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 700
});
// *******Slider-product****
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    415: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 5,
    },
  }
});
// ********laboratory-slyder*******
$('.laboratory__slider').slick({
  dots: true
})
// *********partners__slider*******
$('.partners__slider').slick({
  slidesToShow: 3,
  speed: 500,
  slidesPerRow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }    
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1
      }    
    }
  ]
});