function submitInfo() {
  var yourName = "";
  var email = "";
  var message = "";

  yourName = document.getElementById("yourName").value;
  console.log("first Name:" + yourName);

  email = document.getElementById("email").value;
  console.log("Email:" + email);

  message = document.getElementById("message").value;
  console.log("Password:" + message);

  if (yourName == "" || email == "" || message == "") {
    alert("input Missing Field");
  } else alert("Form has been submitted");
}



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}