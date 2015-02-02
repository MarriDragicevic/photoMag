// wait for DOM ready 

$(function(){


	//Here you want to get out your pages.
	//storeNewPage($page_data)
	//saveNewUrl ($url_data)
	//addNewMenuLink ($menu_datas)

	$(".adminForm").submit(function() {
		//define variabels before ajax kram

		var pageData = {

			":title" : $(".pageTitle").val(),
			":body" : $(".pageBody").val(),
		};
		console.log("pageData: ", pageData);
		$.ajax ({
			url: "php/save_content.php",
			dataType: "json",
			data: {
				"page_info" : pageData
			},

			success : function(data) {
				//saveNewUrl();
				console.log("Our first ajax call! It worked!!", data);
			},

			error : function(data) {
				console.log("our first ajax call doesn't work! :(", data.responseText);
			}

		});
		return false;

	});

/*
function saveNewUrl(){
		
	};*/


});

