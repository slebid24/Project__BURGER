import "../src/module/main";
import bun from "./images/Type=bun_middle.svg";
import cheese from "./images/Type=cheese.svg";
import cucumber from "./images/Type=cucumber.png";
import cutlet from './images/Type=cutlet.svg';
import mayo from "./images/Type=mayo.svg";
import onion from "./images/Type=onion.png";
import salad from "./images/Type=salad.svg";
import tomato from "./images/Type=tomato.png";
import "./styles/index.scss";


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

   const width = wrapper.offsetWidth;
   const widthAfterSwipe = page1.offsetWidth;

   console.log(width)

   let offset = 0;
   field.style.width = width * pages.length + "px";
   page2.style.width = width + "px";
   field.style.display = "flex";
   field.style.transition = "0.8s all";


   pages.forEach(slide => {
      slide.style.width = width;
   });

   console.log(wrapper.offsetWidth)

   

   page2.style.display = "none";
   firstPageBtn.classList.add("header__page-changer--active");


   function swipeToSecondPage() {
      if (offset == 0) {
         offset += width;
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "none";
      page2.style.display = "flex";
      page2.style.marginLeft = `${widthAfterSwipe}px`;
      secondPageBtn.classList.add("header__page-changer--active");
      firstPageBtn.classList.remove("header__page-changer--active");

      document.querySelectorAll(".main__ingradient").forEach((e, i) => {
        setTimeout(() => {
         setTimeout(() => {
            e.style.opacity = 1;
         }, i * (100 * (i / 2.5)));
        }, 250);
       });
   }

   function swipeToFirstPage() {
      if (offset > 0) {
         offset -= width;
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "flex";
      page2.style.display = "none";
      page2.style.marginLeft = widthAfterSwipe;
      firstPageBtn.classList.add("header__page-changer--active");
      secondPageBtn.classList.remove("header__page-changer--active");

      document.querySelectorAll(".main__ingradient").forEach(e => {
         e.style.opacity = 0;
      });
   }

   secondPageBtn.addEventListener("click", swipeToSecondPage);
   mainBtn.addEventListener("click", swipeToSecondPage);
   firstPageBtn.addEventListener("click", swipeToFirstPage);


   class burgerItem {
      constructor(cssClass, top, left, width, height, zIndex, rotate, scale, parentSelector) {
         this.cssClass = cssClass;
         this.top = top;
         this.left = left;
         this.width = width;
         this.height = height;
         this.zIndex = zIndex;
         this.rotate = rotate;
         this.scale = scale;
         this.parent = document.querySelector(parentSelector);
         this.renderBurger();
      }

      renderBurger() {
         const element = document.createElement("div");
         element.innerHTML = `
               <div></div>
            `;
         this.parent.append(element);
         element.classList.add(`${this.cssClass}`);

         element.style.cssText = `
            top: ${this.top - 5}%;
            left: ${this.left}%;
            width: ${this.width + 2}%;
            height: ${this.height}px;
            z-index: ${this.zIndex};
            transform: translate(-50%, -50%) rotate(${this.rotate}deg) scaleX(${this.scale});
         `;
      }
   }

   // new burgerItem(
   //    "burger__bun-top",
   //    // top
   //    5,
   //    // left
   //    60,
   //    // width
   //    40,
   //    // height
   //    220,
   //    // zIndex
   //    10,
   //    // rotate
   //    30,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__bun-top",
      // top
      5,
      // left
      60,
      // width
      40,
      // height
      220,
      // zIndex
      10,
      // rotate
      0,
      1,
      ".burger",
   );
   // new burgerItem(
   //    "burger__salad",
   //    // top
   //    9,
   //    // left
   //    50,
   //    // width
   //    40,
   //    // height
   //    130,
   //    // zIndex
   //    9,
   //    // rotate
   //    25,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__salad",
      // top
      19,
      // left
      50,
      // width
      40,
      // height
      130,
      // zIndex
      9,
      // rotate
      0,
      1,
      ".burger",
   );

   // new burgerItem(
   //    "burger__mayo",
   //    // top
   //    19,
   //    // left
   //    55,
   //    // width
   //    32,
   //    // height
   //    100,
   //    // zIndex
   //    9,
   //    // rotate
   //    30,
   //    -1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__mayo",
      // top
      19,
      // left
      55,
      // width
      32,
      // height
      100,
      // zIndex
      9,
      // rotate
      0,
      -1,
      ".burger",
   );

   // new burgerItem(
   //    "burger__cucumber",
   //    // top
   //    22,
   //    // left
   //    39,
   //    // width
   //    15,
   //    // height
   //    60,
   //    // zIndex
   //    8,
   //    // rotate
   //    20,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__cucumber",
      // top
      22,
      // left
      39,
      // width
      15,
      // height
      60,
      // zIndex
      8,
      // rotate
      0,
      1,
      ".burger",
   );
   

   // new burgerItem(
   //    "burger__cucumber",
   //    // top
   //    18,
   //    // left
   //    52,
   //    // width
   //    15,
   //    // height
   //    60,
   //    // zIndex
   //    8,
   //    // rotate
   //    30,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__cucumber",
      // top
      18,
      // left
      52,
      // width
      15,
      // height
      60,
      // zIndex
      8,
      // rotate
      0,
      1,
      ".burger",
   );
   // new burgerItem(
   //    "burger__cucumber",
   //    // top
   //    34,
   //    // left
   //    57,
   //    // width
   //    15,
   //    // height
   //    60,
   //    // zIndex
   //    8,
   //    // rotate
   //    -10,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__cucumber",
      // top
      34,
      // left
      57,
      // width
      15,
      // height
      60,
      // zIndex
      8,
      // rotate
      0,
      1,
      ".burger",
   );

   

   // new burgerItem(
   //    "burger__cucumber",
   //    // top
   //    36,
   //    // left
   //    74,
   //    // width
   //    15,
   //    // height
   //    60,
   //    // zIndex
   //    8,
   //    // rotate
   //    40,
   //    1,
   //    ".burger",
   // );
   new burgerItem(
      "burger__cucumber",
      // top
      36,
      // left
      74,
      // width
      15,
      // height
      60,
      // zIndex
      8,
      // rotate
      0,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__tomato",
      // top
      41,
      // left
      68,
      // width
      16,
      // height
      60,
      // zIndex
      7,
      // rotate
      18,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__tomato",
      // top
      52,
      // left
      54,
      // width
      16,
      // height
      60,
      // zIndex
      7,
      // rotate
      10,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__tomato",
      // top
      32,
      // left
      36,
      // width
      16,
      // height
      60,
      // zIndex
      7,
      // rotate
      -18,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__tomato",
      // top
      52,
      // left
      20,
      // width
      8,
      // height
      60,
      // zIndex
      7,
      // rotate
      45,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__cutlet",
      // top
      54,
      // left
      55,
      // width
      45,
      // height
      160,
      // zIndex
      6,
      // rotate
      -8,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      32,
      // left
      86,
      // width
      11,
      // height
      60,
      // zIndex
      7,
      // rotate
      25,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      57,
      // left
      68,
      // width
      8,
      // height
      60,
      // zIndex
      8,
      // rotate
      18,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      56,
      // left
      39,
      // width
      11,
      // height
      60,
      // zIndex
      7,
      // rotate
      -30,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      68,
      // left
      59,
      // width
      16,
      // height
      60,
      // zIndex
      7,
      // rotate
      16,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      72,
      // left
      61,
      // width
      16,
      // height
      60,
      // zIndex
      6,
      // rotate
      -20,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__onion",
      // top
      78,
      // left
      43,
      // width
      14,
      // height
      60,
      // zIndex
      7,
      // rotate
      20,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__cheese",
      // top
      86,
      // left
      58,
      // width
      42,
      // height
      160,
      // zIndex
      5,
      // rotate
      -16,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__salad",
      // top
      90,
      // left
      55,
      // width
      48,
      // height
      130,
      // zIndex
      4,
      // rotate
      0,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__mayo",
      // top
      100,
      // left
      55,
      // width
      32,
      // height
      100,
      // zIndex
      3,
      // rotate
      -10,
      1,
      ".burger",
   );

   new burgerItem(
      "burger__bun-bot",
      // top
      100,
      // left
      60,
      // width
      38,
      // height
      100,
      // zIndex
      2,
      // rotate
      -12,
      1,
      ".burger",
   );


   










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
         cutletKey: [],
         mayoKey: [],
         onionKey: [],
         tomatoKey: [],
         cucumberKey: [],
         cheeseKey: [],
         saladKey: [],
         bunKey: []
      },
      num: [],
      sum: [0],
      time: [0],
      oz: [0],
      kcal: [0],
      margin: {
         cutletMar: [],
         mayoMar: [],
         onionMar: [],
         tomatoMar: [],
         cucumberMar: [],
         cheeseMar: [],
         saladMar: [],
         bunMar: []
      }
   };

   class Ingradiet {
      constructor(src, conImg, alt, title, price, time, oz, kcal, parentSelector, obj, imgKey, btnIdM, btnIdP, countId, startMargin, pathMargin) {
         this.src = src;
         this.conImg = conImg;
         this.alt = alt;
         this.title = title;
         this.price = price;
         this.time = time;
         this.oz = oz;
         this.kcal = kcal;
         this.parent = document.querySelector(parentSelector);
         this.obj = obj;
         this.imgKey = imgKey;
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;
         this.countId = countId;
         this.startMargin = startMargin;
         this.pathMargin = pathMargin;
         this.render();
         this.counter();
         this.default();


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

      default () {
         document.querySelector(`#${this.countId}`).innerHTML = 0;
         document.querySelector(".main__total").innerHTML = "$0.00";
         document.querySelector(".main__time").innerHTML = "0.0 min";
         document.querySelector(".main__capacity").innerHTML = "0 oz";
         document.querySelector(".main__kcal").innerHTML = "0 kcal";

      }

      counter() {
         let n = 0;

         document.querySelector(`#${this.btnIdP}`).addEventListener("click", () => {
            setTimeout(() => {
               if (n < 10) {
                  // лічильник
                  document.querySelector(`#${this.countId}`).innerHTML = ++n;
                  let parentSelectorBur = document.querySelector(".main__const-inner");
   
   
                  // додавання класу в масив
                  this.imgKey.push(this.conImg);
                  this.obj.num.push(this.title);
                  let lenghthOfArr = this.obj.num.length;
   
   
   
                  // створення елемента і привласнення йому класу з масива
                  let newItem = document.createElement("div");
                  newItem.classList.add(this.imgKey[this.imgKey.length - 1]);
                  newItem.classList.add("for_comparison");
                  newItem.classList.add("for_start_ani");
   
                  // Пуш значення відступу в масив
                  this.pathMargin.push(this.startMargin);
                  // сума всіх відступів
                  let concatArr = generalObj.margin.cutletMar
                     .concat(generalObj.margin.mayoMar, generalObj.margin.cucumberMar, generalObj.margin.cheeseMar, generalObj.margin.tomatoMar, generalObj.margin.saladMar, generalObj.margin.onionMar, generalObj.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);
                  // привласнення сумми всіх відступів останньому створеному елементу
                  newItem.style = `top: ${marginFin}%`;
                  parentSelectorBur.append(newItem);
   
   
                  let topBun = document.createElement("div");
                  if (lenghthOfArr > 0 && (document.querySelectorAll(".item__topbun").length < 1)) {
                     topBun.classList.add("item__topbun");
                     parentSelectorBur.append(topBun);
                     document.querySelector(".item__topbun").animate([
                        {
                           top: `-400%`,
                           opacity: "0"
                        },
                        {
                           top: `${parseInt(marginFin) - 90}%`,
                           opacity: "1"
                        }
                     ], {
                        duration: 400,
                        easing: "ease-in-out"
                     });
                  } else {
                     document.querySelector(".item__topbun").animate([
                     {
                        transform: "skew(0)",
                        top: `${parseInt(marginFin) - 90}%`,
                        left: "0%"
                        
                     },
                     {
                        transform: "skew(-5deg, 5deg)",
                        top: `${(parseInt(marginFin) - 90) - 15}%`,
                        left: "2%"
                     },
                     {
                        transform: "skew(0)",
                        top: `${parseInt(marginFin) - 90}%`,
                        left: "0%"
                     },
                  ], {
                     duration: 500,
                     easing: "ease-in-out"
                  });
                  }
                  document.querySelector(".item__topbun").style.top = `${parseInt(marginFin) - 90}%`;
   
                  console.log(marginFin)
   
   

                  if (n == 9) {
                     document.querySelector(".main__ingradient").style.backgroundColor = "#fff";
                  }
    
   
   
                  this.obj.sum.push(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;
   
                  this.obj.time.push(this.time);
                  let numTime = this.obj.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;
   
                  this.obj.oz.push(this.oz);
                  let numOz = this.obj.oz;
                  let sumOz = numOz.reduce((sum, current) => sum + current);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;
   
                  this.obj.kcal.push(this.kcal);
                  let numKcal = this.obj.kcal;
                  let sumKcal = numKcal.reduce((sum, current) => sum + current);
                  document.querySelector(".main__kcal").innerHTML = `${sumKcal} kcal`;
   
               } else {
                  
               }
            }, 100);


         });



         document.querySelector(`#${this.btnIdM}`).addEventListener("click", () => {
            setTimeout(() => {
               if (n > 0) {
                  document.querySelector(`#${this.countId}`).innerHTML = --n;

                  // видалення класу імг з масива 
                  let deleted = this.imgKey.pop(this.conImg);


                  // видалення з масива значення останнього відступа
                  let deletedM = this.pathMargin.pop(this.startMargin);


                  // винесення в масив всіх елементів з класом екземпляра
                  let a = "." + this.conImg;
                  let arr = document.querySelectorAll(a);
                  // привласнення в перемінну значення встановленного відступу видаляйомого елемента
                  let comparDefin = arr[arr.length - 1].style.top;
                  console.log(arr.length - 1);
                  let classForDelAni = (((this.obj.num.length - 1) % 2) === 0) ? "for_del_ani_left" : "for_del_ani_right";
                  arr[arr.length - 1].classList.replace("for_start_ani", classForDelAni);

                  // видалення останнього елемента екземпляра
                  setTimeout(() => {
                     arr[arr.length - 1].remove();
                  }, 100);

                  let compar = document.querySelectorAll(".for_comparison");
                  let comparArr = Array.from(compar);
                  let toChange = comparArr.filter((e) => {
                     return parseInt(e.style.top) < parseInt(comparDefin);
                  });


                  toChange.forEach((e) => {
                     e.style.top = `${parseInt(e.style.top) - parseInt(deletedM)}%`;
                  });

                  let concatArr = generalObj.margin.cutletMar
                     .concat(generalObj.margin.mayoMar, generalObj.margin.cucumberMar, generalObj.margin.cheeseMar, generalObj.margin.tomatoMar, generalObj.margin.saladMar, generalObj.margin.onionMar, generalObj.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);

                  setTimeout(() => {
                     if (lenghthOfArr > 0) {
                        document.querySelector(".item__topbun").style.top = `${parseInt(marginFin) - 90}%`;

                     }
                  }, 220);

                  let deletedNun = this.obj.num.pop(this.num);
                  let lenghthOfArr = this.obj.num.length;


                  if (lenghthOfArr == 0) {
                     let deleteBun = document.querySelector(".item__topbun").animate([{
                           top: `${parseInt(deletedM) - 90}%`,
                           opacity: "1"
                        },
                        {
                           top: `-400%`,
                           opacity: "0"
                        }
                     ], {
                        duration: 400,
                        easing: "ease-in-out"
                     });

                     Promise.all(
                        document.querySelector(".item__topbun").getAnimations().map(
                           function (deleteBun) {
                              return deleteBun.finished;
                           }
                        )
                     ).then(() => {
                        document.querySelector(".item__topbun").remove();
                     });
                  }


                  console.log(lenghthOfArr)

                  let deletedSum = this.obj.sum.pop(this.price);
                  let num = this.obj.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  let deletedTime = this.obj.time.pop(this.time);
                  let numTime = this.obj.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;

                  let deletedOz = this.obj.oz.pop(this.oz);
                  let numOz = this.obj.oz;
                  let sumOz = numOz.reduce((sum, current) => sum + current);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;

                  let deletedKcal = this.obj.kcal.pop(this.kcal);
                  let numKcal = this.obj.kcal;
                  let sumKcal = numKcal.reduce((sum, current) => sum + current);
                  document.querySelector(".main__kcal").innerHTML = `${sumKcal} kcal`;



               } else {
                  return;
               }
            }, 200);
         });
      }


   }



   let cutletIn = new Ingradiet(
      cutlet,
      "item__cutlet",
      "cutlet",
      "Cutlet",
      3,
      4,
      7,
      600,
      ".main__botside",
      generalObj,
      generalObj.burger.cutletKey,
      "cutletMinus",
      "cutletPlus",
      "cutletCount",
      -50,
      generalObj.margin.cutletMar
   );




   let mayoIn = new Ingradiet(
      mayo,
      "item__mayo",
      "mayo",
      "Mayo",
      1,
      0.5,
      2,
      150,
      ".main__botside",
      generalObj,
      generalObj.burger.mayoKey,
      "mayoMinus",
      "mayoPlus",
      "mayoCount",
      -10,
      generalObj.margin.mayoMar
   );



   let onionIn = new Ingradiet(
      onion,
      "item__onion",
      "onion",
      "Onion",
      0.5,
      0.5,
      1,
      40,
      ".main__botside",
      generalObj,
      generalObj.burger.onionKey,
      "onionMinus",
      "onionPlus",
      "onionCount",
      -10,
      generalObj.margin.onionMar
   );

   let tomatoIn = new Ingradiet(
      tomato,
      "item__tomato",
      "tomato",
      "Tomato",
      1,
      0.5,
      1,
      60,
      ".main__botside",
      generalObj,
      generalObj.burger.tomatoKey,
      "tomatoMinus",
      "tomatoPlus",
      "tomatoCount",
      -10,
      generalObj.margin.tomatoMar
   );

   let cucumberIn = new Ingradiet(
      cucumber,
      "item__cucumber",
      "cucumber",
      "Cucumber",
      0.5,
      0.5,
      1,
      40,
      ".main__botside",
      generalObj,
      generalObj.burger.cucumberKey,
      "cucumberMinus",
      "cucumberPlus",
      "cucumberCount",
      -10,
      generalObj.margin.cucumberMar
   );

   let cheeseIn = new Ingradiet(
      cheese,
      "item__cheese",
      "cheese",
      "Cheese",
      2,
      0.5,
      2,
      150,
      ".main__botside",
      generalObj,
      generalObj.burger.cheeseKey,
      "cheeseMinus",
      "cheesePlus",
      "cheeseCount",
      -3,
      generalObj.margin.cheeseMar
   );

   let saladIn = new Ingradiet(
      salad,
      "item__salad",
      "salad",
      "Salad",
      0.5,
      0.5,
      1,
      40,
      ".main__botside",
      generalObj,
      generalObj.burger.saladKey,
      "saladMinus",
      "saladPlus",
      "saladCount",
      -20,
      generalObj.margin.saladMar,
   );

   let bunIn = new Ingradiet(
      bun,
      "item__midbun",
      "bun",
      "Bun",
      0.5,
      0.5,
      1,
      90,
      ".main__botside",
      generalObj,
      generalObj.burger.bunKey,
      "bunMinus",
      "bunPlus",
      "bunCount",
      -20,
      generalObj.margin.bunMar
   );





});