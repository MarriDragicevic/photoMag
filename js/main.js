// wait for DOM ready 

$(function(){


//Click-event between admin-form and  content-list
	$('.control li').click(function(){
		$("main .row").children().not(".control").hide();
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
//Click-event finished 



});

