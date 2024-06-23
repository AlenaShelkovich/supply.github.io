$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $(".sticky-header").addClass("fix");
    } else {
      $(".sticky-header").removeClass("fix");
    }
  });
});


$('.review-wrapper').slick({
    arrows : false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});




