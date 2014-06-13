$(document).bind('pagebeforeshow', function () {
  $("#indiv").hide();
$("#an-obj-11 #indiv").hide();
$("#an-obj-12 #indiv").hide();
$("#an-obj-13 #indiv").hide();
$("#an-obj-31 #indiv").hide();
$("#an-obj-32 #indiv").hide();
$("#an-obj-33 #indiv").hide();
$("#an-obj-34 #indiv").hide();
$("#an-obj-35 #indiv").hide();
$("#an-obj-36 #indiv").hide();	
$("#an-obj-37 #indiv").hide();	
$("#an-obj-38 #indiv").hide();
$("#an-obj-39 #indiv").hide();
$("#an-obj-61 #indiv").hide();
});



		$(document).ready(function(e) {
			
 $(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 300,

				closeEffect : 'elastic',
				closeSpeed  : 300,

				closeClick : true,
				
				arrows :false,
				
				helpers : {
					overlay : null
				}
			});			
			if('#page4.ui-page-active' ){
      	$("#an-scene-3").addClass('run t-0');
			}
			
$('#btnall').click(function(){	
 	 $("#an-obj-11 #indiv").toggle("slow");
 	 $("#an-obj-12 #indiv").toggle("slow");
   $("#an-obj-13 #indiv").toggle("slow");				 
});	

	$('#btn1').click(function(){	
  	 $("#an-obj-11 #indiv").toggle("slow");
		 	 
  });
	 $('#btn2').click(function(){	
		 $("#an-obj-12 #indiv").toggle("slow");
		  
  });
	 $('#btn3').click(function(){	
     $("#an-obj-13 #indiv").toggle("slow");
		
  });
	
	
	$('#btn3all').click(function(){	
  $("#an-obj-31 #indiv").toggle("slow");
	$("#an-obj-32 #indiv").toggle("slow");
  $("#an-obj-33 #indiv").toggle("slow");	
	$("#an-obj-34 #indiv").toggle("slow");	
	$("#an-obj-35 #indiv").toggle("slow");	
	$("#an-obj-36 #indiv").toggle("slow"); 
	$("#an-obj-37 #indiv").toggle("slow");
});	

	$('#btn31').click(function(){	
     $("#an-obj-31 #indiv").toggle("slow");

  });
			$('#btn32').click(function(){	
 
		 $("#an-obj-32 #indiv").toggle("slow");

  });
	$('#btn33').click(function(){	

		 $("#an-obj-33 #indiv").toggle("slow");

  });
	$('#btn34').click(function(){	

		 $("#an-obj-34 #indiv").toggle("slow");

  });
	$('#btn35').click(function(){	

		 $("#an-obj-35 #indiv").toggle("slow");	 

  });
	$('#btn36').click(function(){	
 
		 $("#an-obj-36 #indiv").toggle("slow");

  });
	$('#btn37').click(function(){	
		 $("#an-obj-37 #indiv").toggle("slow");
  });
	
	// Set the options for the effect type chosen
var options = { direction: 'left' };
 
// Set the duration (default: 400 milliseconds)
var duration = 700;

	$('#btn38').click(function(){	
		 $("#an-obj-38 #indiv").toggle('slide', options, duration);
  });
	$('#btn39').click(function(){	
		 $("#an-obj-39 #indiv").toggle('slide', options, duration);
  });
	
		$('#btn41').click(function(){	
		 $("#an-obj-61 #indiv").toggle('slide', options, duration);
  });
    });
	
/* Swipping through pages */	
$(document).on('swipeleft', 'article', function(event){

    if(event.handled !== true) // This will prevent event triggering more then once
    { 
	      var nextpage = $(this).next('article[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);						
     }
         event.handled = true;
	
     return false;         }
});

$(document).on('swiperight', 'article', function(event){   
    if(event.handled !== true) // This will prevent event triggering more then once
    {   
        var prevpage = $(this).prev('article[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);		
        }
        event.handled = true;
      }
    return false;            
});



