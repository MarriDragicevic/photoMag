<?php

 include_once("autoloader.php");

 $cq = New ContentQueries("127.0.0.1", "photoMag2", "root", "mysql");


if(isset($_REQUEST["get_pages_data"])) {
 	echo(json_encode($cq->getContent()));//Du ska skapa EN NYYYYY inom ""
}

