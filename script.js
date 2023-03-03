"use strict";
// Mobile navigation
const buttons = document.querySelector(".navigation-btn");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const headerEl = document.querySelector(".header");
const overLay = document.querySelector(".over_lay");
console.log(overLay);

buttons.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
  overLay.classList.toggle("layer");
});
