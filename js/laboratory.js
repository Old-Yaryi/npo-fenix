$(document).ready(function() {
  let $slider = $('.laboratory-slider__item');
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
    appendArrows:'.laboratory-slider__nav',
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
});