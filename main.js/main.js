function openRightNav() {
  document.querySelector("#nav-right").style.left = "0";
  document.querySelector("#nav-right").style.boxShadow = "5px 0 10px black";
}

function closeRightNav() {
  document.querySelector("#nav-right").style.left = "-300px";
  document.querySelector("#nav-right").style.boxShadow = "none";
}

function navLink() {
  document.querySelector("#nav-right").style.left = "-300px";
}
