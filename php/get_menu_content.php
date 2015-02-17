<?php

 include_once("autoloader.php");

 $cq = New ContentQueries("127.0.0.1", "photoMag2", "root", "mysql");

//GETMENUDATA
	echo(json_encode($cq->getMenuLinks()));


//We're keeping these files seperate since getContent(); and getMenuLinks(); refuses to cooperate if they're in the same get_content