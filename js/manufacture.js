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
// *******grid-line-view******
const line = document.querySelector('.manufacture__panel-switch_line');
const block = document.querySelector('.manufacture__panel-switch_block');
const view = document.querySelector('.manufacture__showcase');
line.addEventListener('click', function(){
  view.classList.add('line-view')
  line.style.backgroundColor = '#BF9D77';
  block.style.backgroundColor = 'rgba(43, 50, 60, 0.1)';
});
block.addEventListener('click', function(){
  view.classList.remove('line-view')
  line.style.backgroundColor = 'rgba(43, 50, 60, 0.1)';  
  block.style.backgroundColor = '#BF9D77';
});