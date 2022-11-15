$(".vacancy-block .vacancy-block__header").on("click", function() {
  $(this).toggleClass("active");
  $(this).next().slideToggle();   
});