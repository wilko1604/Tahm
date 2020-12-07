// JavaScript Document
/*
var Lwindow = document.getElementById("Limg")

function Lhover(element) {
  element.setAttribute('src', 'images/window-left-T.jpg');
}

function Lunhover(element) {
  element.setAttribute('src', 'images/window-left.jpg');
}

var Cwindow = document.getElementById("Cimg")

function Chover(element) {
  element.setAttribute('src', 'images/filecabinetV2.jpg');
}

function Cunhover(element) {
  element.setAttribute('src', 'images/filecabinetV1.jpg');
}

var Rwindow = document.getElementById("Rimg")

function Rhover(Rwindow) {
  Rwindow.setAttribute('src', 'images/window-right-T.jpg');
}

function Runhover(Rwindow) {
  Rwindow.setAttribute('src', 'images/window-right.jpg');
}
*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}