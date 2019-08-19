$(document).ready(function(){
	$('#sidebarCollapse').on('click', function(){
  $('#sidbar').toggleClass('active');
  $('.active').fadeToggle(200);
});
});