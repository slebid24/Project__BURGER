import "./styles/index.scss";
import "../src/module/main";
import cutlet from './images/Type=cutlet.svg';
import mayo from "./images/Type=mayo.svg";


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

      sum: [0]
   };

   const n = generalObj.sum;
   
   const sumprice = n.reduce((sum, current) => sum + current);
   
  


   class Ingradiet {
      constructor(src, alt, title, price, time, kcal, parentSelector, obj, imgKey, count, btnMinus, btnPlus ) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.price = price;
         this.time = time;
         this.kcal = kcal;
         this.parent = document.querySelector(parentSelector);
         this.obj = obj;
         this.imgKey = imgKey;
         this.count = document.querySelector(count);
         this.btnMinus = document.querySelector(btnMinus);
         this.btnPlus = document.querySelector(btnPlus);
         
         }

         render() {
            const element = document.createElement("div");
            element.innerHTML = `
            
                  <div class="main__ingradient-inner">
                     <img class="main__ingradient-img" src=${this.src} alt=${this.alt} ">
                     <div class="main__ingradient-name">${this.title}</div>
                     <div class="main__counter">
                     <button class="main__counter-minus"></button>
                     <div class="main__count"></div>
                     <button class="main__counter-plus"></button>
                  </div>
               </div>
            
            `;
             this.parent.append(element);
            element.classList.add("main__ingradient");

            let n = 0;
            
            document.querySelector(".main__total").innerHTML = `$${n.toFixed(2)}`;

            this.btnPlus.addEventListener("click", () => {
               if (n < 10) {
                  this.count.innerHTML = ++n;
                  this.imgKey.push(this.src);
                  
                  

                  this.obj.sum.push(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  
               } else {
                  return;
               }
            });

            this.btnMinus.addEventListener("click", () => {
               if (n > 0) {
                  this.count.innerHTML = --n;
                  let deleted = this.imgKey.pop(this.title);
                  

                  let deletedSum = this.obj.sum.pop(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;
               } else {
                  return;
               }
            });
         }

         
         
         
      }





      let mayoIn = new Ingradiet(
         mayo,
         "mayo",
         "Mayo",
         0.5,
         0.5,
         300,
         ".main__botside",
         generalObj,
         generalObj.burger.mayoKey,
         '.main__count',
         ".main__counter-minus",
         ".main__counter-plus",


      );
   
      mayoIn.render();
      // mayoIn.counter();
       

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
         '.main__count',
         ".main__counter-minus",
         ".main__counter-plus",

      );
   
      cutletIn.render();
      // cutletIn.counter();

      
     
});