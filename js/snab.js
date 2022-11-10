$('.supply-license-img').fancybox({
  infobar: false,
  toolbar: "smallBtn",
	arrows: true,
});
$(".procurement__price .procurement__price-header").on("click", function() {
  if ($(window).width() <= 680){
    $(this).toggleClass("active");
    $(this).next().slideToggle();   
  }
});