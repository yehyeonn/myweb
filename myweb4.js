$(document).ready(function(){
  const toggleBtn = $(".navbar_toggle");
  const menu = $(".navbar_menu");

  toggleBtn.on("click", function() {
      menu.toggleClass('show');
  });

  $("#btn").click(function(event){
    event.preventDefault();
    chkSubmit();
  })

function chkSubmit(){
  // 이메일 확인 
  email = $("input[name='email']").val().trim();
  password = $("input[name='psw']").val().trim();
  
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  pswRegex = /^(?=.*\d)[a-z\d]+$/;

  if(email.trim() == '' && password.trim() == ''){
    alert('아이디와 비밀번호는 필수 입력값입니다.');
    email.focus();
    return false;
  }
  if(email.trim() == ''){
    alert('아이디는 필수 입력값입니다.');
    email.focus();
    return false;
  }else if(!emailRegex.test(email)) {
    alert('올바른 이메일 주소를 입력하세요.');
    email.focus();
    return false;
  } 
  if(password.trim() == ''){
    alert("비밀번호는 필수 입력값입니다.");
    password.focus();
    return false;
  }else if(!pswRegex.test(password)) {
    alert("비밀번호가 틀립니다.");
    password.focus();
    return false;
  }
  if(emailRegex.test(email) && pswRegex.test(password)) {
    $(".form-container").submit();
  }
  
}
  

})
