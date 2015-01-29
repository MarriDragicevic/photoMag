// wait for DOM ready 

$(function(){

	$('main').children().not('.control').hide();
	$('.content-list').show();
	$('.control').show();

	$('.admin-form').click(function(){
		console.log("Tjabba marri");
		$('.content-list').hide();

		$('.admin-form').show();
	});




});

