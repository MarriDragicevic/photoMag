
function showContent(url) {


  $(".control").show();
  getMenuLinks(createMenu);

  console.log("Jag är en url ",url);

  if (url == "content-list") {
    getContent();
    getMenuLinks(createMenuSelect);

  } else if (url == "admin-content") {
    getContent();
    getMenuLinks(createMenuSelect);
    url = "content-list";

  } else if (url == "admin-form"){
    getContent();
    getMenuLinks(createMenuSelect);
  }

   else if (url == "home") {
    $("admin-content").hide();
    $("home").show();
    $(".control").hide();


  } else if (url != "home" && url != "admin-content" && url != "content-list" && url != "admin-form") {
      console.log("Hej jag tänkte köra lite AJAX");
      $(".control").hide();

      $.ajax ({
        url: "php/get_created_pages.php",
        dataType: "json",
        data: {
          "get_created_page_data" : url
        },
        success:function(data){
          console.log("det funkilerar att nå dej ", data);
          $(".showMadePage").html("");
         $(".showMadePage").append('<article class="fillPageWithData"></article>');
         $(".showMadePage").show();
         //Appenda in i din article

         
        $(".fillPageWithData").append('<div class="panel panel-default"><div class="panel-heading"><h1 class="panel-title">'+data[0]["title"]+'</h1></div>'+ '<div class="panel panel-body"><p>'+data[0]["body"]+'</p>'+'<img src="img/'+data[0]["img_id"][0]["path"]+'" class="img-responsive"></div></div>');



        },
        error:function(data){
          console.log("det funkilerar -ICKE- att nå dej", data.responseText);
        }
      });

      url = "showMadePage";
  }

  $('.control li').removeClass('active');
  $('.'+url+"-button").addClass('active');
  $("main .row").children().not(".control").hide();
  $('.'+url).show();


}



function goToUrl(thisHref) {
  showContent(thisHref);

  // Add the current "state/page" to our history
  history.pushState(null,null,thisHref);
}


// Start things up
function start(){
  onPopAndStart();
  $(document).on("click","a",function(event){
    event.preventDefault();
    var thisHref = $(this).attr('href');
    console.log("thisHref: ",thisHref);

    goToUrl(thisHref);
  });

  // Add a pop state listener
  // (listen to forward/backward buttons in the browser)
  addEventListener("popstate",onPopAndStart);

  // Run this function on popstate and initial load
  function onPopAndStart(){

    var l = location.href;
    var pageName = l.substring(l.lastIndexOf("/")+1);
    pageName = pageName || "home";


    showContent(pageName);
  }
}


