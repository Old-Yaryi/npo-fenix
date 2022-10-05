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
// *******lider-product****
const swiper = new Swiper('.swiper', {

  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
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
