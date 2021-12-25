// var button = document.getElementById("nav-button");
// var menu = document.getElementById("menu");
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
// });

const hamburger = document.getElementById("nav-button");
var navmenu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("show");
  var nav = document.getElementById("nav");
  nav.style.display = "flex";
  nav.style.flexDirection = "column";
});
