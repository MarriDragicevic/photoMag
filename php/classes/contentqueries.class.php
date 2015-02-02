<?php

 class ContentQueries extends PDOHelper {

 	protected $user_info = array("user_id" => 1);
 	//Därför att den aldrig ska vara NULL

 }


 	public function storeNewPage($page_data) {

 		$sql = "INSERT INTO pages(title, body, user_id) VALUES(:title, :body, :user_id)";

 		$menu_data = $page_data["menuData"];

 		unset($page_data["menuData"]);

		return $this->query($sql, $page_data);

		$menu_data[":menu_link_path"] = $this->saveNewUrl($url_alias_path);

		$this->addNewMenuLink($menu_datas);
	

 		//DENNA sqlen 
 		//returnerar bara MEN...

 	}

 	public function saveNewUrl ($url_data){

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

 	public function addNewMenuLink ($menu_datas){

 		$menu_link[":menu_link_menu"] = "my_menu_machine_name";
 		$sql = "INSERT INTO menu_links (title, path, menu) VALUES (:menu_link_title, :menu_link_path, :menu_link_menu)";

 		$menu_data = array(
 			":menu_link_title" => $menu_datas,
 			":menu_link_path" => $url_alias_path,
 			":menu_link_menu" => $menu_link
 			);



 		return $this->query($sql, $menu_datas);


 	}


 	//skapa public funktion som du kallar på i inparameter från save_content 
 	// 
 //Döp det exakt efter det du ska använda det till för mindre komplikationer