(function ($) {

var nav_offset_top = $('.navbar').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
   
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();   
        if (scroll >= nav_offset_top ) {
            $(".navbar").addClass("navbar-dark bg-dark");
        } else {
            $(".navbar").removeClass("navbar-dark bg-dark");
        }
    });
     

    $(".tab-item").on("click", function(){
        $("#myTab").find(".active").removeClass("active");
        $(this).addClass("active");
     });

})(jQuery);