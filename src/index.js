import modal from "./modules/modal";
import ui from "./modules/ui";
import burgerConstructor from "./modules/burger-constructor";
import pageChanger from "./modules/page-changer";
import firstPageAnimat from "./modules/first-page-animat";
import ingradientMenu from "./modules/ingradient-menu"
import ingradientMenuData from "./modules/data/ingradiets-menu-data";
import itemCalculationData from "./modules/data/calculation-item-data";

import "./styles/index.scss";

const dataForVisualization = {
   itemImg: {
      cutletKey: [],
      mayoKey: [],
      onionKey: [],
      tomatoKey: [],
      cucumberKey: [],
      cheeseKey: [],
      saladKey: [],
      bunKey: []
   },
   margin: {
      cutletMar: [],
      mayoMar: [],
      onionMar: [],
      tomatoMar: [],
      cucumberMar: [],
      cheeseMar: [],
      saladMar: [],
      bunMar: []
   },
};

const orderData = {
   recipe: [],
   sum: [0],
   time: [0],
   oz: [0],
   kcal: [0],
}



window.addEventListener("DOMContentLoaded", () => {
   document.body.style.overflow = "hidden";

   const firstPageBtn = document.querySelector("#first-page-btn");
   const secondPageBtn = document.querySelector("#second-page-btn");
   const wrapper = document.querySelector(".main__wrapper");
   const field = document.querySelector(".main__inner");
   const pages = document.querySelectorAll(".forslide");
   const page1 = document.querySelector(".main__inner-pg1");
   const page2 = document.querySelector(".main__inner-pg2");
   const bigBtn = document.querySelector(".main__btn");

   pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, bigBtn);
   firstPageAnimat(bigBtn, firstPageBtn, secondPageBtn);
   ui();
   ingradientMenu(ingradientMenuData);
   burgerConstructor(dataForVisualization, orderData, itemCalculationData);
   modal();
});