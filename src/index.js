import modal from "./module/modal";
import ui from "./module/ui";
import burgerConstructor from "./module/burger-constructor";
import pageChanger from "./module/page-changer";
import firstPageAnimat from "./module/first-page-animat";

import "./styles/index.scss";


window.addEventListener("DOMContentLoaded", () => {
   document.body.style.overflow = "hidden";

   const firstPageBtn = document.querySelector("#first-page-btn");
   const secondPageBtn = document.querySelector("#second-page-btn");
   const wrapper = document.querySelector(".main__wrapper");
   const field = document.querySelector(".main__inner");
   const pages = document.querySelectorAll(".forslide");
   const page1 = document.querySelector(".main__inner-pg1");
   const page2 = document.querySelector(".main__inner-pg2");
   const mainBtn = document.querySelector(".main__btn");

   pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, mainBtn);
   firstPageAnimat(mainBtn, firstPageBtn, secondPageBtn);
   ui();
   burgerConstructor();
   modal();
});