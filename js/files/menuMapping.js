/**SELECTS**/

function createMenuSelect(data) {

	var menuTree = buildMenuTree(data);

	//Make a bootstrap form control
	var select_html = $('<select class="form-control" />');
	//Make 
	var topOption = $("<option> Top </option>");

	topOption.data("menuItemData", {mlid: null, menu: "my_menu_machine_name"});
	select_html.append(topOption);

	$(".adminForm .menuSelect").html(select_html);
	console.log("Jag har ont i magen");
	//0 - Vi måste börja någonstans, börja räkna arrayen någonstans
	buildMenuSelect(select_html, menuTree, 0);

}


// skapa select för att kunna välja bilder för dina pages
function createImagesSelect (data) {
  var selectImgInHtml = $("<select class='form-control'></select>");

  var imgSelectTop = $("<option>Select picture</option>");

  imgSelectTop.data("imgData", {iid: null});
  selectImgInHtml.append(imgSelectTop);

  buildImgOptions(selectImgInHtml, data);

  $(".pageForm .imgSelect").html(selectImgInHtml);
}

function buildImgOptions (selectImgInHtml, data) {
  for (var i = 0; i < data.length; i++) {
      var imgOptions = $('<option value="'+data[i].iid+'">'+" "+data[i].title+'</option>');

      imgOptions.data("imgData", data[i]);

      selectImgInHtml.append(imgOptions);
  }
  return selectImgInHtml;

}




function buildMenuSelect(select_html, menuItemDatas, level) {
	//bygger alla options och framtida options rekursivt
	//menuitemData är alla menu_links som någonsin skapats
	//Level är både föräldrar och barn (nivå)
	//Håll koll på S i menuItemDatas
	
	for (var i = 0; i < menuItemDatas.length; i++) {
		var levelDepth = "-";
		//För varje barn jag skapar, kommer jag få ett extra streck

		for (var j = 0; j < level; j++) {
			levelDepth += "-";
		}

		//Vi måste plocka varendastaste mlid från menu_links för att ingen ska bli undefined 

		var subOptions = $('<option value="'+menuItemDatas[i].mlid+'">'+levelDepth+" "+menuItemDatas[i].title+'</option>');

		//lägger till all data för menuItem
		subOptions.data("menuItemData", menuItemDatas[i]);
		//append this shiad
		select_html.append(subOptions);

		//Vi ska göra en if-sats nu
		if(menuItemDatas[i].children.length > 0){
			select_html = buildMenuSelect(select_html, menuItemDatas[i].children, level+1);

		}


	}
	return select_html;
}

/** SELECTS STOP **/


/*** HASH TREE START ***/

//Skapa (funktion sen i den) variabel menu tree (returnera i, stoppa in resultat)
// Curly brackets, en ny variabel, ska va tomma nya objekt som kommer fyllas med saftiga bounty såser 
//Skapa nytt object som lagrar i raden hash

 function buildMenuTree(menuLinkData){
		var menuTree = [];
		var hash = {};

 
//Sortera weight med function sort 
//Ge två parametrar, där du 
//Jämför nuvarande med nästa, och flytta om det returnerar falskt//Och varje gång vi kallar på hash ska vi få tillbaka objektet
//Eftersom det är en referens så slipper vi göra den jobbiga vägen


	
//En for each loop 
//"Alla länkar som går igenom loopen, skapar du en ny egenskap
//children, som är en array. Nu ska alla länkar ha en children array
//HÄR ska du göra alla unika "trycka in dina favoriter"
	menuLinkData.forEach(function(menuTreeArray){
		menuTreeArray.children = [];
//peka på mlid, lär dig syntaxen
		hash["_"+menuTreeArray.mlid] = menuTreeArray;
//Fortfarande inget träd, vi går än genom MenuData som vi skapar 
//rad 2 
//Gör en if sats
//tryck genom alla objekt och testa "Om jag är FÖRÄLDER, tryck in mig direkt i trädet"
		if(!menuTreeArray.plid){
			menuTree.push(menuTreeArray);
		}
	});
//Youre gonna make a forin loop
// Då alla Top levels sorterats ut, sorterar vi resten
//Här kommer trädstrukturen själv in 
// Nu slipper vi kolla alla ancestors ist går vi direkt in 

	for(var i in hash){
		var linkData = hash[i];
//peka på varje enskilt objekt
		if(linkData.plid){
			hash["_"+linkData.plid].children.push(linkData);

		}
	}

	console.log("MenuTree: ", menuTree);


	return menuTree;

	
//Hash har nu objektnycklar sparade 
//Kollar de som inte är på top nivå 
// Och om det är en top level så kommer vi inte gennom 
//for if satsen som ska kolla 





}

/*** HASH TREE STop ***/

/*** BUILDING MENU ***/
//level är en inparameter du skapar här för att 
//Första funktionen ska hämta ut träd och sätta på rätt plats
//Sen ska jag loopa att få ut föräldrar och barn 
//

function createMenu(data) {
	var menuTree = buildMenuTree(data);
	var menuHtml = $('<ul class="nav navbar-nav"/>');

	buildMenu(menuHtml, menuTree);

	$("header nav .navbar-collapse .navbar-nav").remove();
	$("header nav .navbar-collapse").prepend(menuHtml);
}

function buildMenu(menuUl, menuLinksArray) {
	menuLinksArray.forEach(function(linkObject) {
		var linkHtml = $('<li><a href="'+linkObject.path+'">'+linkObject.title+'</a></li>');

		if (linkObject.children.length > 0) {
			linkHtml.addClass("dropdown");
			var dropdown = $('<ul class="dropdown-menu"/>');
			buildMenu(dropdown, linkObject.children);

			linkHtml.append(dropdown);
		}

		menuUl.append(linkHtml);
	});
}

/** BUILD MENU STOP **/