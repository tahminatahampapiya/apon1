
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:false
});
$('.scricshort-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      
   ]
  });
  $('.text-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: true,
    asNavFor: '.img-slider'
  });
  $('.img-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"0",
    arrows:false,
    fade: false,
    asNavFor: '.text-slider'
  });
  new VenoBox({
    selector: '.venobox'
  });