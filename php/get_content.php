<?php

 include_once("autoloader.php");

 $cq = New ContentQueries("127.0.0.1", "photoMag", "root", "mysql");


	if(isset($_REQUEST["get_pages_data"])) {
	 	echo(json_encode($cq->getContent($_REQUEST["get_pages_data"])));//Du ska skapa EN NYYYYY inom ""
	}