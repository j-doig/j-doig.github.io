// JavaScript Document


$(document).ready(function () {
   'use strict';
	$('header').fadeIn(2000).removeClass('hidden');
	$('.box1').fadeIn(2000).removeClass('hidden');
	$('.box2').fadeIn(3000).removeClass('hidden');
	$('.box3').fadeIn(4000).removeClass('hidden');
	$('.breaker1 p').fadeIn(4000).removeClass('hidden');
});

$(document).ready(function() {   
    'use strict';
    $(window).scroll( function(){   
        $('.hideme').each( function(){ 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();     
            if( bottom_of_window > bottom_of_object ){      
                $(this).animate({'opacity':'1'},1000);               
            }
        }); 
    }); 
});

$(document).ready(function(){
	
	'use strict';
	
	$('.button').click(function(){
		$('.resp-menu').fadeToggle(600);
	});
	
});




