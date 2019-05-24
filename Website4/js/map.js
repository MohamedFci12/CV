/*global  console ,$, jQuery, alert, prompt*/

$(document).ready(function () {
	"use strict";
	// to prevent errors 
	$('.carousel').carousel({interval : 5000});
	$('.gear-check').click(function () {
		$('.color-option').toggle(3000);
	});
	// change themes color on click
	var x = $('.color-option ul li'), scrollButton = $('#scroll-top');
	x.eq(0).css("backgroundColor", "#ec0909").end()
		.eq(1).css("backgroundColor", "#00A9FF").end()
		.eq(2).css("backgroundColor", "#FFF400").end()
		.eq(3).css("backgroundColor", "#ec0909");
	
    x.click(function () {
	    $("link[href*='themes']").attr("href", $(this).attr("data-value"));
	});
	$('.loading h2').fadeOut(2000, function () {
		$('body').css("overflow", "auto");
		$(this).parent().fadeOut(2000, function () {
		    $(this).remove();
		});
	});
	
	$(window).scroll(function () {
		$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
		
	});
	scrollButton.click(function () {
		$('html,body').animate({scrollTop: 0}, 800);
	});
	
	var myDate = new Date(),
		out = myDate.getDay(),
		out2 = myDate.getDate(),
		out3 = myDate.getFullYear(),
		out4 = myDate.getMonth(),
		out5 = myDate.getHours(),
		out6 = myDate.getMilliseconds(),
		out7 = myDate.getTimezoneOffset(),
		out8 = myDate.getUTCDate(),
		out9 = myDate.getUTCDay();
		console.log("out => " + out);	
		console.log("out2 => " + out2);
		console.log("out3 => " + out3);
		console.log("out4 => " + out4);
		console.log("out5 => " + out5);
		console.log("out6 => " + out6);
		console.log("out7 => " + out7);
		console.log("out8 => " + out8);
		console.log("out9 => " + out9);

	
	
	
});




