$(document).ready(function() {


  $(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if ($(window).width() > 991) {
    if(wn > 70){
    	$(".svg1").css({"max-height": "50px", "padding" : "3px 0"});
      $(".nav-brand").removeClass("d-none");
      $(".nav_second").addClass("d-none");
      $(".nav-brand").css("padding","0");
    }
    else{
      $(".svg1").css({"max-height": "80px", "padding-top" : "0px"});
    	$(".navbar-brand").removeClass("d-none");
      $(".nav-brand").addClass("d-none");
      $(".nav_second").removeClass("d-none");
    }
    };
  });


      $(function() {
        $('#scroll').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $("#services").offset().top}, 900);
        });
      });

      var divisor = document.getElementById("divisor"),
      slider = document.getElementById("slider");
      function moveDivisor() {
    	divisor.style.width = slider.value+"%";
    }


});
