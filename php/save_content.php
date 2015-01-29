<?php

	include_once("autoloader.php");

	$cq = New ContentQueries("127.0.0.1, photoMag, root, mysql");

	 if(isset($_REQUEST["page_info"]));
 		echo(json_encode($cq->storeNewPage($_REQUEST["pageTitle"])));

	 if(isset($_REQUEST["page_url"]));
	 	echo(json_encode($cq->saveNewUrl($_REQUEST["pageUrl"])));

	 if(isset($_REQUEST["page_menu_link"]));
	 	echo(json_encode($cq->addNewMenuLink($_REQUEST["pageBody"])));	