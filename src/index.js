import "./styles/index.scss";
import "../src/module/main";
import cutlet from './images/Type=cutlet.svg';


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
      constructor: {
         cutletItem: []
      }
   };
  


   class Ingradiet {
      constructor(src, alt, title, pieces, price, time, kcal, parentSelector, obj, btnMinus, btnPlus, ) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.pieces = pieces;
         this.price = price;
         this.time = time;
         this.kcal = kcal;
         this.parent = document.querySelector(parentSelector);
         this.obj = obj;
         this.btnMinus = document.querySelector(btnMinus);
         this.btnPlus = document.querySelector(btnPlus);
         
      }


      render() {
         const element = document.createElement("div");
         element.innerHTML = `
         <div class="main__ingradient">
               <div class="main__ingradient-inner">
                  <img class="main__ingradient-img" src=${this.src} alt=${this.alt} ">
                  <div class="main__ingradient-name">${this.title}</div>
                  <div class="main__counter">
                  <button class="main__counter-minus"></button>
                  <div class="main__count">${this.pieces}</div>
                  <button class="main__counter-plus"></button>
               </div>
            </div>
         </div>
         `;
         this.parent.append(element);
         element.classList.add("main__botside");
      }


      counter(){
         
         this.pieces  =  2;
         
      }
   }

   

   new Ingradiet(
      cutlet,
      "cutlet",
      "Cutlet",
      0,
      2,
      3,
      600,
      ".main__inner-pg2",
      generalObj,
      ".main__counter-minus",
      ".main__counter-plus",
   ).render().counter();























});