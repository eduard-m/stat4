"use strict";

var hamMenu = document.querySelector('.hamburger');
var mobileMenu = document.querySelector('.menu');
hamMenu.addEventListener("click", mobMenu);

function mobMenu() {
  hamMenu.classList.toggle("open-menu");
  mobileMenu.classList.toggle('active');
}