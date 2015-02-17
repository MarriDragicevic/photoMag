

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


}


	
//Hash har nu objektnycklar sparade 
//Kollar de som inte är på top nivå 
// Och om det är en top level så kommer vi inte gennom 
//for if satsen som ska kolla 



