// wait for DOM ready 

$(function(){

	$('.control li').click(function(){
		$('.control li').addClass('active').not(this).removeClass('active');
	});

	$('.content-list-button').click(function(){

		$('.content-list').show();
		$('.admin-form').hide();
	});

	$('.admin-form-button').click(function(){

		$('.admin-form').show();
		$('.content-list').hide();
	});


});

