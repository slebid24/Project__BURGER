import "./styles/index.scss";
import "../src/module/main";
import cutlet from './images/Type=cutlet.svg';
import mayo from "./images/Type=mayo.svg";
import onion from "./images/Type=onion.png";


window.addEventListener("DOMContentLoaded", () => {
   
   document.body.style.overflow = "hidden";


   // Свайп 
   const firstPageBtn = document.querySelector("#first-page-btn");
   const secondPageBtn = document.querySelector("#second-page-btn");
   const wrapper = document.querySelector(".main__wrapper");
   const field = document.querySelector(".main__inner");
   const pages = document.querySelectorAll(".forslide");
   const page1 = document.querySelector(".main__inner-pg1");
   const page2 = document.querySelector(".main__inner-pg2");
   const mainBtn = document.querySelector(".main__btn");
   const topBtns = document.querySelectorAll(".header__page-changer");

   const width = window.getComputedStyle(wrapper).width;
   const widthAfterSwipe = window.getComputedStyle(page1).width;
   console.log(widthAfterSwipe);


   let offset = 0;
   field.style.width = 100 * pages.length + "vw";
   field.style.display = "flex";
   field.style.transition = "0.8s all";


   pages.forEach(slide => {
      slide.style.width = width;
   });


   function deleteNotDigits(str) {
      return +str.slice(0, str.length - 2);
   }

   page2.style.display = "none";
   firstPageBtn.classList.add("header__page-changer--active");


   function swipeToSecondPage() {
      if (offset == 0) {
         offset += deleteNotDigits(width);
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "none";
      page2.style.display = "flex";
      page2.style.marginLeft = widthAfterSwipe;
      secondPageBtn.classList.add("header__page-changer--active");
      firstPageBtn.classList.remove("header__page-changer--active");
   }

   function swipeToFirstPage() {
      if (offset > 0) {
         offset -= deleteNotDigits(width);
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "flex";
      page2.style.display = "none";
      page2.style.marginLeft = widthAfterSwipe;
      firstPageBtn.classList.add("header__page-changer--active");
      secondPageBtn.classList.remove("header__page-changer--active");
   }



   secondPageBtn.addEventListener("click", swipeToSecondPage);
   mainBtn.addEventListener("click", swipeToSecondPage);
   firstPageBtn.addEventListener("click", swipeToFirstPage);

   // Ефект меню
   topBtns.forEach((elem) => {

      elem.onmouseenter =
         elem.onmouseleave = (e) => {

            const tolerance = 10;

            const left = 0;
            const right = elem.clientWidth;

            let x = e.pageX - elem.offsetLeft;

            if (x - tolerance < left) {
               x = left;
            }
            if (x + tolerance > right) {
               x = right;
            }

            elem.style.setProperty('--x', `${ x }px`);

         };
   });
   // 2 page
   //////////////////////////////////////////////////
   let generalObj = {
      burger: {
         cutletKey:[],
         mayoKey: [],
         onionKey: [],
         tomatoKey: [],
         cucumberKey: [],
         cheeseKey: [],
         saladKey: [],
         bunKey: []
      },

      sum: [0],
      time: [0],
      oz: [0],
      kcal: [0],
   };

   class Ingradiet {
      constructor(src, alt, title, price, time, kcal, parentSelector, obj, imgKey, btnIdM, btnIdP, countId) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.price = price;
         this.time = time;
         this.kcal = kcal;
         this.parent = document.querySelector(parentSelector);
         this.obj = obj;
         this.imgKey = imgKey;
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;
         this.countId = countId;
         this.render();
         this.counter();
         this.defoult();
         
         
         
         
         
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

         defoult() {
            document.querySelector(`#${this.countId}`).innerHTML = 0;
            document.querySelector(".main__total").innerHTML = "$0.00";
            document.querySelector(".main__time").innerHTML = "0 min";
            document.querySelector(".main__capacity").innerHTML = "0 oz";
            document.querySelector(".main__kcal").innerHTML = "0 kcal";
   
         }
         
         counter() {
            let n = 0;
           
            document.querySelector(`#${this.btnIdP}`).addEventListener("click", () => {
               if (n < 10) {
                  
                  document.querySelector(`#${this.countId}`).innerHTML = ++n;
                  this.imgKey.push(this.src); 
                  
                  this.obj.sum.push(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  this.obj.time.push(this.time);
                  let numTime = this.obj.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime} min`;




               } else {
                  return;
               }
            });

            document.querySelector(`#${this.btnIdM}`).addEventListener("click", () => {
               if (n > 0) {
                  document.querySelector(`#${this.countId}`).innerHTML = --n;
                  let deleted = this.imgKey.pop(this.title);
                  

                  let deletedSum = this.obj.sum.pop(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  let deletedTime = this.obj.time.pop(this.time);
                  let numTime = this.obj.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime} min`;
                  
               } else {
                  return;
               }
            });
         }

         
      }

      

      let cutletIn = new Ingradiet(
         cutlet,
         "cutlet",
         "Cutlet",
         2,
         3,
         600,
         ".main__botside",
         generalObj,
         generalObj.burger.cutletKey,
         "cutletMinus",
         "cutletPlus",
         "cutletCount",

      );
      
      
      

      let mayoIn = new Ingradiet(
         mayo,
         "mayo",
         "Mayo",
         2,
         3,
         300,
         ".main__botside",
         generalObj,
         generalObj.burger.mayoKey,
         "mayoMinus",
         "mayoPlus",
         "mayoCount",
      );

      

      let onionIn = new Ingradiet(
         onion,
         "onion",
         "Onion",
         0.5,
         0.5,
         300,
         ".main__botside",
         generalObj,
         generalObj.burger.onionKey,
         "onionMinus",
         "onionPlus",
         "onionCount"
      );
   
      

     
      
});