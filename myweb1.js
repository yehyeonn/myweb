const toggleBtn = document.querySelector(".navbar_toggle");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () =>{
    menu.classList.toggle('show');
});

$(document).ready(function(){
   
    $('img[usemap]').rwdImageMaps();
    
  $login = $(".navbar_icons");
  $login.click(function(){
    window.location.href = "index4.html"
  })

})
