/*global $, alert, console */
$(function () {
	
	'use strict';
	
	$(".header").height($(window).height());
	$('.header .arrow i').click(function() {
		$('html,body').animate({
			scrollTop: $(".features").offset().top
		}, 1000);
});
	
	
	$('.show').click(function () {
		
		$(".item").fadeIn(3000);
		
	});
	// if you click button hire us go to ==>> our team
	
	$('.hire').click(function (){
		$('html,body').animate({
			
			scrollTop: $('.our-team').offset().top
		},1000);
		
	});
			// if you click our work go to ==> our work

	$('.work').click(function() {
			
			$('html,body').animate({
				
				scrollTop: $('.our-work').offset().top
			},1000);
		});
	// **************************************************************************** //
	// function cheack ///////////////////////////////////////////////////////
	var rightArrow = $('.testi .container .fa-chevron-right'),
		leftArrow = $('.testi .container .fa-chevron-left');
	// ******************* function check ********************* //////////////
	function check(){
		if($('.client:first').hasClass('active')){
		leftArrow.fadeOut();
	}else {
		leftArrow.fadeIn();
	}
	if($('.client:last').hasClass('active')){
		rightArrow.fadeOut();
	}else {
		rightArrow.fadeIn();
	}
		
	}
	check(); // call function 
	// ********************* end function check *************************** //
	
	$('.testi .container i').click(function() {
		
	// check  if i => icon has class fa fa-chervon-right	
		if($(this).hasClass('fa-chevron-right'))
			{
				$('.testi .container .active').fadeOut(100,function(){
					
					$(this).removeClass('active').next('.client').addClass('active').fadeIn();
					check();
				});
			}
				else{
					$('.testi .container .active').fadeOut(100,function(){
					
					$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
					check();
				});
		}							   
	});
	
	
			
});
