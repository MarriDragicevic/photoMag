// wait for DOM ready 

$(function(){

	$('main').children().not('.control').hide();
	$('.content-list').show();
	$('.control').show();

	$('.admin-form').click(function(){
		$('.content-list').hide();

		$('.admin-form').show();
	});

});

