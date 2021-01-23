$(document).ready(function () {

  $('.js-button-campaign').click(function() { 
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
  });

  // закрыть на крестик
  $('.js-close-campaign').click(function() { 
    $('.js-overlay-campaign').fadeOut();
  });

  // закрыть по клику вне окна
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign').fadeOut();
    }
  });
  // открыть по таймеру 
  // $(window).on('load', function () { 
  //   setTimeout(function(){
  //     if($('.js-overlay-campaign').hasClass('disabled')) {
  //       return false;
  //     } else {
        
  //       $(".js-overlay-campaign").fadeIn();
  //     }
  //   }, 5000);
  // });
  var owl = $('.first_slider');
  owl.owlCarousel({
    items:1,
    loop:true,
    dots: true,
    margin:0,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:6000,
    // autoplayHoverPause:true,
    smartSpeed:750
  });
  var owl = $('.second_slider');
  owl.owlCarousel({
    items:5,
    loop:true,
    nav: true,
    margin:0,
    responsive:{
      0:{
        items:1
      },
      460: {
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
  // $('.sections__item').hover(function () {
  //   $(this).addClass('sections__item-active');

  // }, function () {
  //   $(this).removeClass('sections__item-active');
  // });
  $('button.owl-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $('button.owl-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
  var owl = $('.third_slider');
  owl.owlCarousel({
    items:4,
    loop:true,
    nav: true,
    lazyLoad:true,
    margin:22,
    responsive:{
      0:{
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        smartSpeed:750
      },
      460: {
        items:2,
        autoplay:true,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        smartSpeed:750
      },
      600:{
        items:3,
        autoplay:true,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        smartSpeed:750
      },
      1000:{
        items:4,
        autoplay:true,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        smartSpeed:750
      },
      1300:{
        autoplay:false
      }
    }
  });
  $('button.owl-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $('button.owl-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');

  $(function (){
		$("#myBtn").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
  });
  var owl4 = $('.fourth_slider');
  owl4.owlCarousel({
    items:1,
    responsiveBaseElement: 'body',
    responsiveClass: true,
    loop:true,
    lazyLoad:true,
    dots: true,
    margin:0
  });
  var input = document.querySelector("#phone");
  intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(success, failure) {
      $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          success(countryCode);
      });
    },
    utilsScript: "assets/js/utils.js"
  });
});