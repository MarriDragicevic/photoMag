<?php

 class ContentQueries extends PDOHelper {

 	protected $user_info = array("user_id" => 1);
 	//Därför att den aldrig ska vara NULL




// ** LÄS PÅ , NÄR DU FÖRSTÅR 1000% SÅ SKA DU TA BORT LUFTEN EMELLAN OCH GÖRA DET SNYGGT *** 
 
 	public function storeNewPage($page_data) {

 		$page_data[":user_id"] = $this->user_info["user_id"];

 		$menu_data = $page_data["menuData"];

 		unset($page_data["menuData"]);

 		$sql = "INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id)";

		return $this->query($sql, $page_data);

		$menu_data[":menu_link_path"] = $this->saveNewUrl($url_alias_path);

		$this->addNewMenuLink($menu_data);
	
		
 		//DENNA sqlen 
 		//returnerar bara MEN...

 	}

 	public function saveNewUrl($url_data){

 		$sql = "SELECT pid FROM pages ORDER BY created DESC LIMIT 1";

 		$new_pid = $this->query($sql);

 		$new_pid = $new_pid[0]["pid"];

 		$url_alias_path = $url_data[":path"];

 		unset($url_data[":path"]);

 		$sql2 = "INSERT INTO url_alias(path, pid) VALUES(:path, :pid)";

 		$url_data = array(":path" => $url_alias_path, ":pid" => $new_pid);

 		return $this->query($sql2, $url_data);



 		//...Denna måste spara, därav ny variabel
 		//Path kommer bli din href i framtiden 
 		//RETURN AFTER EVERY SQL YOU W

 	}

 	public function addNewMenuLink($menu_datas){//Inparameter för du SKAPAR data

 		$menu_link[":menu_link_menu"] = "my_menu_machine_name";
 		$sql = "INSERT INTO menu_links (title, path, menu, plid weight) VALUES (:menu_link_title, :menu_link_path, :menu_link_menu, :menu_link_plid, :menu_link_weight)";

 		$menu_datas[":menu_link_weight"] = (int) $menu_datas[":menu_link_weight"];

 		// $menu_data = array(
 		// 	":menu_link_title" => $menu_datas,
 		// 	":menu_link_path" => $url_alias_path,
 		// 	":menu_link_menu" => $menu_link,
 		// 	":menu_link_plid" => $menu_datas,
 		// 	":menu_link_weight" => $menu_datas
 		// 	);



 		return $this->query($sql, $menu_datas);


 	}


 	public function getContent(){

 		$sql = "SELECT pages.pid, pages.title AS pageTitle, CONCAT(users.fname,' ', users.lname) AS author, menu_links.title, url_alias.path, pages.created
 		FROM pages, users, menu_links, url_alias
 		WHERE pages.pid = url_alias.pid  AND url_alias.path = menu_links.path";


 		return $this->query($sql); 	

 	}


 	public function getMenuLinks(){
 		$sql = "SELECT * FROM menu_links";

 		return $this->query($sql);
 	}


 	public function getCreatedPages($url_data_info){
 		$sql = "SELECT pid FROM url_alias WHERE path = :path";
 		$url_paths = array(":path" => $url_data_info);
 		$url_path_info = $this->query($sql, $url_paths);
 		
 		$sql2 ="SELECT * FROM pages WHERE pid = :pid";
 		$page_info = array(":pid" => $url_path_info[0]["pid"]);


 		return $this->query($sql2, $page_info);
 	}


	public function getFooterInfo(){
		$sql = "SELECT * FROM footer";

		return $this->query($sql);
	}

}



	
	

 	//skapa public funktion som du kallar på i inparameter från save_content 
 	// 
 //Döp det exakt efter det du ska använda det till för mindre komplikationer




