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
// *********Галерея**********
$('.product-gallery__img').fancybox({
  infobar: false,
  toolbar: "smallBtn",
	arrows: true,
});
// ********product slider********
$(document).ready(function() {
  let $slider = $('.product-slider');
  let $progressBar = $('.progress');
  let $progressBarLabel = $( '.slider__label' );
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    let calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows:'.product-slider__nav',
    speed: 400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
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
});
// *********slider-other********
$(document).ready(function() {
  let $slider = $('.slider-other');
  let $progressBar = $('.progress');
  let $progressBarLabel = $( '.slider__label' );
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    let calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;   
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  });
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    slidesPerRow: 1,
    rows: 2,
    appendArrows:'.slider-other__nav',
    speed: 400,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 1
        }
      }
    ]
  });  
});

