 /*global  console ,$, jQuery, alert, prompt*/
$(document).ready(function(){
//	$("html,body").niceScroll();
	
	
	var rightArrow = $('.banner .fa-chevron-right'),
		leftArrow  = $('.banner .fa-chevron-left');
		function check(){
		//ceck for first item
		if($('.client:first').hasClass('active')){
		leftArrow.fadeOut();
	} else{
		leftArrow.fadeIn();
	}
		// check for last item
		if($('.client:last').hasClass('active')){
			rightArrow.fadeOut();
		}else{
			rightArrow.fadeIn();
		}
	}
	check();
	// end function 
	// when i click icon if it chevron-right or left
	
	$('.banner  i').click(function() {
		
	//if i i clicked chevron-right make active class fadeout and call back function execute removeclass active from active class and next client add class active  and remove class active from it 
		// hint == when you remove class hidden class become hidden
		
		if($(this).hasClass('fa-chevron-right')) {
				$('.banner .active').fadeOut(100,function () {
		$(this).removeClass('active').next('.client').addClass('active').removeClass("hidden");
					check();
					
				});
			
		}else{
			$('.banner  .active').fadeOut(100,function () {
		$(this).removeClass('active').prev('.client').addClass('active').removeClass("hidden");
				check();
		});
			
		}							   
	});
	// progress make it animated by custom attr 
	$('.progress-animated span').each(function(){
		
	$(this).animate({
		width: $(this).data('progress') + '%',
	},2000,function(){
		$(this).text($(this).data('progress') + '%')
	});
	});
	// list ///////////////////////////////////////////////////////
	

	var right = $('.ser-car  .fa-chevron-right'),
		left = 	 $('.ser-car  .fa-chevron-left');
	function check2(){
		if($('.item:first').hasClass('active'))
		{
			left.fadeOut();
		} else{
			left.fadeIn();
	}
		
	if($('.item:last').hasClass('active')){
		right.fadeOut();
	}
	else{
		right.fadeIn();
		}
	}
	check2();
	
		$('.ser-car i').click(function(){
			if($(this).hasClass('fa-chevron-right')){
				$('.ser-car .active').fadeOut(100,function(){
		$(this).removeClass('active').next('.item').addClass('active').removeClass('hidden').fadeIn();
					check2();
				});
			}
			else{
			$('.ser-car .active').fadeOut(100,function(){
					$(this).removeClass('active').prev('.item').addClass('active').fadeIn();
					check2();
				});
			}
		});
	//our services
	$('.links li:eq(0)').click(function(){
		$('html,body').animate({
			scrollTop:$('.banner').offset().top,
		},1000);	
	});
	
	$('.links li:eq(1)').click(function(){
		$('html,body').animate({
			scrollTop:$('.about').offset().top,
		},1000);	
	});
	
	$('.links li:eq(2)').click(function(){
		$('html,body').animate({
			scrollTop:$('.our-services').offset().top,
		},1000);	
	});
	
	$('.links li:eq(3)').click(function(){
		$('html,body').animate({
			scrollTop:$('.our-gallery').offset().top,
		},1000);	
	});
	
	$('.links li:eq(4)').click(function(){
		$('html,body').animate({
			scrollTop:$('.middle').offset().top,
		},1000);	
	});
	
	$('.links li:eq(5)').click(function(){
		$('html,body').animate({
			scrollTop:$('.contact-us').offset().top,
		},1000);	
	});
	//move up button 
	
		$('.footer .move-up').click(function(e){
			e.preventDefault();
			$('html,body').animate({
				scrollTop:0	
			},1000);
		});
});