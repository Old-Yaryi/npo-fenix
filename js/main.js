const lang = document.querySelector('.header__link-language');
const lang_ul = document.querySelector('.header__link-language_var');
lang.addEventListener('click', function(){
  lang_ul.classList.toggle('active')
});
