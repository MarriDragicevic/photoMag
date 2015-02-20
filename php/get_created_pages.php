<?php


 include_once("autoloader.php");

 $cq = New ContentQueries("127.0.0.1", "photoMag2", "root", "mysql");

 if(isset($_REQUEST["get_created_page_data"])) {
 	
 	echo(json_encode($cq->getCreatedPages($_REQUEST["get_created_page_data"])));
 }