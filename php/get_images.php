<?php

	include_once("autoloader.php");

	$cq = New ContentQueries("127.0.0.1", "photoMag3", "root", "mysql");

	echo(json_encode($cq->getImages()));