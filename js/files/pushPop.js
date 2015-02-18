
function showContent(url) {
  //Navbar kommer vara din meny 

  $(".control").show();

  if (url == "content-list") {
    getContent();
    getMenuLinks();
  } else if (url == "admin-content") {
    getContent();
    getMenuLinks();

    url = "content-list";
  } else if (url == "admin-form"){
    getContent();
    getMenuLinks();
  } else if (url != "admin-form") {
    $(".control").hide();
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
