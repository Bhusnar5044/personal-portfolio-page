(function ($) {

var nav_offset_top = $('.nav').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
   
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();   
        if (scroll >= nav_offset_top ) {
            $(".nav").addClass("nav_fixed");
        } else {
            $(".nav").removeClass("nav_fixed");
        }
    });
     

    $(".tab-item").on("click", function(){
        $("#myTab").find(".active").removeClass("active");
        $(this).addClass("active");
     });

})(jQuery);