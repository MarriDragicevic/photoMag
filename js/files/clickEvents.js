// wait for DOM ready 

$(function(){


//Click-event between admin-form and  content-list
	$('.sidebar li').click(function(){
		$("main .row").children().not(".control").hide();
		$('.sidebar li').addClass('active').not(this).removeClass('active');
	});

//Unfortunately, we must have ajax call getContent here at the click event, since it becomes "undefined" when in main.js.

	$('.content-list-button').click(function(){

		$('.content-list').show();
		$('.admin-form').hide();
		getContent();


		//Få ut från adminform till contentlist 
		//GET CONTENT
		function getContent(){

			$.ajax ({
				url: "php/get_content.php",
				dataType: "json",
				data: {
					"get_pages_data" : 1
				},

				success : function(data) {
					console.log("we GOT the data", data);

				$(".content-list table tr").not(".pageTableHeads").remove();
				//Om du clickar på edited contributions så det inte läggs på 


				for (i = 0; i < data.length; i++) {
						var fillTableWithData = $("<tr/>");
							fillTableWithData.data("pageTableData", data[i]); //skapande av ny sträng


							fillTableWithData.append('<td><span class="badge">'+data[i].pid+"</span></td>");
							fillTableWithData.append('<td>'+data[i].pageTitle+"</td>");
							fillTableWithData.append('<td>'+data[i].author+"</td>");
							fillTableWithData.append('<td>'+data[i].title+"</td>");
							fillTableWithData.append('<td>'+data[i].path+"</td>");
							fillTableWithData.append('<td>'+data[i].created+"</td>");
							fillTableWithData.append('<td><button class="edit-btn btn-xs">'+"Edit"+"</button></td>");
							fillTableWithData.append('<td><button class="trash-btn btn-xs">'+"Trash"+"</button></td>");
						
						$(".content-list table").append(fillTableWithData);

					}

				},

				error : function(data) {
					console.log("We DID NOT GET data", data.responseText);
				}
			});
			return false;
		}

	});

	$('.admin-form-button').click(function(){

		$('.admin-form').show();
		$('.content-list').hide();
	});
//Click-event finished 

	


});