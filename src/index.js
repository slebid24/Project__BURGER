import "./styles/index.scss";
import "../src/module/main";

window.addEventListener("DOMContentLoaded", () => {

// Свайп 


const firstPageBtn = document.querySelector("#first-page-btn");
const secondPageBtn = document.querySelector("#second-page-btn");
const wrapper = document.querySelector(".main__wrapper");
const field = document.querySelector(".main__inner");
const pages = document.querySelectorAll(".forslide");

const width = window.getComputedStyle(wrapper).width;



let slideIndex = 1;
let offset = 0;
field.style.width = 100 * pages.length + "%";
field.style.display = "flex";
field.style.transition = "0.5s all";
wrapper.style.overflow = "hidden";

   // 
   pages.forEach(slide => {
      slide.style.width = width;
   });











});