$(function(){
	$('#contact').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});
});

