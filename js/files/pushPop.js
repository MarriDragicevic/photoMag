
function showContent(url) {
 

  $(".control").show();
  getMenuLinks(createMenu);

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
  } else if (url != "admin-form") {
    $(".control").hide();
  } else if (url == "home") {
    $("admin-content").hide();
    $("home").show();
  } else if (url != "home" && url != "admin-content") {
    $.ajax {
      url: "get_created_pages.php",
      dataType: "json",
      data: 
        
    }
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


