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
				saveNewUrl();
				console.log("Our first ajax call! It worked!!", data);
			},

			error : function(data) {
				console.log("our first ajax call doesn't work! :(", data.responseText);
			}

		});
		return false;

	});


		function saveNewUrl(){

			var pageUrlData = {

				":path" : $(".pageUrl").val(),
			};

			$.ajax ({
				url: "php/save_content.php",
				dataType: "json",
				data: {
					"page_url" : pageUrlData
				},

				success : function(data) {
					addNewMenuLink();
					console.log("our second ajax call! It works!", data);
				},

				error : function(data) {
					console.log("Our second ajax call doesnt work!! :(", data.responseText);
				}

			});
			return false;
		}

		function addNewMenuLink(){

			var pageMenuLinkData = {

				":menu_link_title" : $(".inputMenuTitle").val(),
				":menu_link_path" : $(".pageUrl").val(),
				":menu_link_menu" : "my_menu_machine_name",
			};

			$.ajax ({
				url: "php/save_content.php",
				dataType: "json",
				data: {
					"page_menu_link" : pageMenuLinkData
				},

				success : function(data) {
					console.log("Our third ajax call! It works!", data);
				},

				error : function(data) {
					console.log("our third ajax call doesn't work! :(");
				}

			});
			return false;

		}

		


});

/* //and build new table rows from data
  for (var i = 0; i < data.length; i++) {
    //create new table row
    var newTableRow = $("<tr/>");
    //append important page data to newTableRow
    newTableRow.append('<td><span class="badge">'+data[i].pid+"</span></td>");
    newTableRow.append('<td><strong>'+data[i].title+"</strong></td>");
    newTableRow.append('<td>'+data[i].author+"</td>");
    newTableRow.append('<td>'+data[i].created+"</td>");

    //then append newTableRow to the #content-list table
    $("#content-list table").append(newTableRow);
  }
}
*/