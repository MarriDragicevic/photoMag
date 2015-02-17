
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

}

function getMenuLinks() {

	$.ajax({
		url: "php/get_content.php",
		dataType: "json",
		data: {
			"get_menu_links_data" : 1 //För vi ska inte göra en variabel, vi ska inte spara, vi ska hämta? 
		}
	});
}