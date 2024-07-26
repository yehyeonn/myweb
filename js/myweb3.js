function myMap() {
	let lat, lng;   // 위도, 경도
    [lat, lng] = [37.5153013, 127.0728076];

    // 마커
    var myIcon = new google.maps.MarkerImage("map.png", null, null, null, new google.maps.Size(50, 57));

    const mapProp = {
        // center : 지도표현 중심
        center : new google.maps.LatLng(lat,lng),
        // zoom level
        zoom: 18,
    }            
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
    
    const myPos1 = {lat: lat, lng: lng};
    let marker1 = new google.maps.Marker({
      position: myPos1,
      icon: myIcon,
    });
    marker1.setMap(map); 
}

function openTab(evt, tabName) {
  // 모든 tabcontent 요소를 숨깁니다.
  $('.tabcontent').hide();

  // 모든 tablinks 요소에서 "active" 클래스를 제거합니다.
  $('.tablinks').removeClass('active');

  // 현재 탭을 표시하고, 탭을 연 버튼에 "active" 클래스를 추가합니다.
  $('#' + tabName).show();
  $(evt.currentTarget).addClass('active');
}
  

$(document).ready(function(){
  const toggleBtn = $(".navbar_toggle");
  const menu = $(".navbar_menu");

  toggleBtn.on("click", function() {
      menu.toggleClass('show');
  });

  $login = $(".navbar_icons");
  $login.click(function(){
    window.location.href = "index4.html"
  })

  $btn = $("[name='button1']");
  $btn.click(function(){
      window.location.href = "index2.html"
  })

  $default = $("#defaultOpen")
  $default.click();

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $(".prev").on("click", function() {
      plusSlides(-1);
  });

  $(".next").on("click", function() {
      plusSlides(1);
  });

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      let slides = $(".mySlides");

      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }

      slides.hide();
      slides.eq(slideIndex - 1).show();
  }
})
