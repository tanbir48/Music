// var button = document.getElementById("nav-button");
// button.addEventListener("click", function () {
//   var nav = document.getElementById("nav");
//   var menu = document.getElementById("menu");
//   menu.style.display = "block";
//   nav.style.display = "flex";
//   nav.style.flexDirection = "column";
//   var crossbutton = document.getElementById("mobile-view-cross");
//   crossbutton.style.display = "block";
//   crossbutton.style.marginLeft = "10px";
// });

// var crossbutton = document.getElementById("nav-button-cross");
// crossbutton.addEventListener("click", function () {
//   var menu = document.getElementById("menu");
//   menu.style.display = "none";
//   crossbutton.style.display = " ";
//   crossbutton.onclick = window.location.reload();
// });

var button = document.getElementById("nav-button");
button.addEventListener("click", function () {
  var nav = document.getElementById("nav");

  nav.style.display = "flex";
  nav.style.flexDirection = "column";

  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
