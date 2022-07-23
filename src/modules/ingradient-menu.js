import bun from "../images/Type=bun_middle.svg";
import cheese from "../images/Type=cheese.svg";
import cucumber from "../images/Type=cucumber.png";
import cutlet from '../images/Type=cutlet.svg';
import mayo from "../images/Type=mayo.svg";
import onion from "../images/Type=onion.png";
import salad from "../images/Type=salad.svg";
import tomato from "../images/Type=tomato.png";

function ingradientMenu() {
   class Ingradiet {
      constructor(src,  alt, parentSelector,
                  btnIdM, btnIdP, countId, title,) {
         this.src = src;
         this.alt = alt;
         this.parent = document.querySelector(parentSelector);
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;
         this.countId = countId;
         this.title = title;
         this.render();
      }

      render() {
         const element = document.createElement("div");
         element.innerHTML = `
                  <div class="main__ingradient-inner">
                     <img class="main__ingradient-img" src=${this.src} alt=${this.alt} ">
                     <div class="main__ingradient-name">${this.title}</div>
                     <div class="main__counter">
                     <button id="${this.btnIdM}" class="main__counter-minus"></button>
                     <div id="${this.countId}" class="main__count"></div>
                     <button id="${this.btnIdP}" class="main__counter-plus"></button>
                  </div>
               </div>
            `;
         this.parent.append(element);
         element.classList.add("main__ingradient");
      }
   }

   new Ingradiet(
      cutlet,
      "cutlet",
      ".main__botside",
      "cutletMinus",
      "cutletPlus",
      "cutletCount",
      "Cutlet",
   );

   new Ingradiet(
      mayo,
      "mayo",
      ".main__botside",
      "mayoMinus",
      "mayoPlus",
      "mayoCount",
      "Mayo",
   );
   
   new Ingradiet(
      onion,
      "onion",
      ".main__botside",
      "onionMinus",
      "onionPlus",
      "onionCount",
      "Onion",
   );

   new Ingradiet(
      tomato,
      "tomato",
      ".main__botside",
      "tomatoMinus",
      "tomatoPlus",
      "tomatoCount",
      "Tomato",
   );

   new Ingradiet(
      cucumber,
      "cucumber",
      ".main__botside",
      "cucumberMinus",
      "cucumberPlus",
      "cucumberCount",
      "Cucumber",
   );

   new Ingradiet(
      cheese,
      "cheese",
      ".main__botside",
      "cheeseMinus",
      "cheesePlus",
      "cheeseCount",
      "Cheese",
   );

   new Ingradiet(
      salad,
      "salad",
      ".main__botside",
      "saladMinus",
      "saladPlus",
      "saladCount",
      "Salad",
   );

   new Ingradiet(
      bun,
      "bun",
      ".main__botside",
      "bunMinus",
      "bunPlus",
      "bunCount",
      "Bun",
   );   

}

export default ingradientMenu;