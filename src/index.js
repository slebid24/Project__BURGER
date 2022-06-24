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
   let offset = 0;

   field.style.width = width * pages.length + "px";
   page2.style.width = width + "px";
   field.style.display = "flex";
   field.style.transition = "0.8s all";

   pages.forEach(slide => {
      slide.style.width = width;
   });

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
         let timing = i * (100 * (i / 2.5));
         setTimeout(() => {
            setTimeout(() => {
               e.style.opacity = 1;
               e.classList.add("showed");
            }, timing);
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

   
   firstPageBtn.addEventListener("click", () => {
     if (document.querySelectorAll(".main__ingradient")[7].classList.contains("showed")) {
      swipeToFirstPage();
      document.querySelectorAll(".main__ingradient").forEach(e => {
         e.classList.remove("showed");
      });
     }
   });

   function doSwitch(btn1, btn2){
      let arr = [];
      arr.push(btn1, btn2);
      arr.forEach(e => {
         e.addEventListener("click", () => {
            setTimeout(() => {
               swipeToSecondPage();
            }, 1000);
         });
      });
   }

   doSwitch(mainBtn, secondPageBtn);




   class burgerItem {
      constructor(cssClass, top, topA, left, leftA, width, widthA,
         height, zIndex, zIndexA, rotate, rotateA, scale, duration, parentSelector) {
         this.cssClass = cssClass;
         this.top = top;
         this.topA = topA;
         this.left = left;
         this.leftA = leftA;
         this.width = width;
         this.widthA = widthA;
         this.height = height;
         this.zIndex = zIndex;
         this.zIndexA = zIndexA;
         this.rotate = rotate;
         this.rotateA = rotateA;
         this.scale = scale;
         this.duration = duration;
         this.parent = document.querySelector(parentSelector);
         this.renderBurger();
         this.burgerDoStartAni();
         this.switchTo2Page(mainBtn, secondPageBtn);
         this.switchTo1Page();
      }

      burgerPosition(element, top, left, width, height, zIndex, rotate, scale) {
         element.style.cssText = `
         top: ${top}%;
         left: ${left}%;
         width: ${width}%;
         height: ${height}px;
         z-index: ${zIndex};
         transform: translate(-50%, -50%) rotate(${rotate}deg) scaleX(${scale});
         background-size: 90%;
         background-position: center;
         background-repeat: no-repeat;
         display: block;
         position: absolute;
         `;
      }


      renderBurger() {
         const item = document.createElement("div");
         item.innerHTML = `
               <div></div>
            `;
         this.parent.append(item);
         item.classList.add(`${this.cssClass}`);
         this.burgerPosition(item, this.topA, this.leftA, this.widthA,
            this.height, this.zIndex, this.rotate, this.scale);
      }

      burgerDoOpening() {
         document.querySelector(`.${this.cssClass}`).animate([{
               top: `${this.topA}%`,
               left: `${this.leftA}%`,
               transform: `translate(-50%, -50%) rotate(${this.rotateA}deg) scaleX(${this.scale}`,
               width: `${this.widthA}%`,
               zIndex: `${this.zIndexA}`
            },
            {
               top: `${this.top - 5}%`,
               left: `${this.left}%`,
               transform: `translate(-50%, -50%) rotate(${this.rotate}deg) scaleX(${this.scale}`,
               width: `${this.width + 2}%`,
               zIndex: `${this.zIndex}`
            }
         ], {
            duration: this.duration,
            easing: "ease",
         });

         if (document.querySelector(`.${this.cssClass}`).classList.contains("closed")) {
            document.querySelector(`.${this.cssClass}`).classList.remove("closed");
            document.querySelector(`.${this.cssClass}`).classList.add("opened");
         } else {
            document.querySelector(`.${this.cssClass}`).classList.add("opened");
         }

      }

      burgerDoFolding() {
         document.querySelector(`.${this.cssClass}`).animate([{
               top: `${this.top - 5}%`,
               left: `${this.left}%`,
               transform: `translate(-50%, -50%) rotate(${this.rotate}deg) scaleX(${this.scale}`,
               width: `${this.width + 2}%`,
               zIndex: `${this.zIndex}`
            },
            {
               top: `${this.topA}%`,
               left: `${this.leftA}%`,
               transform: `translate(-50%, -50%) rotate(${this.rotateA}deg) scaleX(${this.scale}`,
               width: `${this.widthA}%`,
               zIndex: `${this.zIndexA}`

            }
         ], {
            duration: this.duration,
            easing: "ease",
         });

         if (document.querySelector(`.${this.cssClass}`).classList.contains("opened")) {
            document.querySelector(`.${this.cssClass}`).classList.remove("opened");
            document.querySelector(`.${this.cssClass}`).classList.add("closed");
         } else {
            document.querySelector(`.${this.cssClass}`).classList.add("closed");
         }
      }


      burgerDoStartAni() {
         let defaultOtherParam = {
            transform: `translate(-50%, -50%) rotate(${this.rotateA}deg) scaleX(${this.scale}`,
            width: `${this.widthA}%`,
            zIndex: `${this.zIndexA}`
         };

         let {
            transform,
            width,
            zIndex
         } = defaultOtherParam;

         document.querySelector(`.${this.cssClass}`).animate([{
               top: `${this.topA}%`,
               left: `${this.leftA}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA + 1}%`,
               left: `${this.leftA + 1}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA - 1}%`,
               left: `${this.leftA - 1}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA}%`,
               left: `${this.leftA}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA - 1}%`,
               left: `${this.leftA + 1}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA + 1}%`,
               left: `${this.leftA - 1}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
            {
               top: `${this.topA}%`,
               left: `${this.leftA}%`,
               transform: transform,
               width: width,
               zIndex: zIndex,
            },
         ], {
            duration: 700,
            iterations: 2,
            easing: "linear",
         });

         Promise.all(
            document.querySelector(`.${this.cssClass}`).getAnimations().map(
               function (burgerDoStartAni) {
                  return burgerDoStartAni.finished;
               }
            )
         ).then(() => {
            this.burgerDoOpening();
         });

         this.burgerPosition(document.querySelector(`.${this.cssClass}`), (this.top - 5), this.left,
            (this.width + 2), this.height, this.zIndex, this.rotate, this.scale);

      }

      switchTo2Page(btn1, btn2) {
         let arr = [];
         arr.push(btn1, btn2);
         arr.forEach(e => {
            e.addEventListener("click", () => {
              if (document.querySelector(`.${this.cssClass}`).classList.contains("opened")) {
               let burgerFolding = this.burgerDoFolding();

               Promise.all(
                  document.querySelector(`.${this.cssClass}`).getAnimations().map(
                     function (burgerFolding) {
                        return burgerFolding.finished;
                     }
                  )
               ).then(() => {
                  this.burgerPosition(document.querySelector(`.${this.cssClass}`), this.topA, this.leftA,
                     this.widthA, this.height, this.zIndexA, this.rotateA, this.scale);

               });
              }
            });
         });

      }

      switchTo1Page() {

         firstPageBtn.addEventListener("click", () => {
            if (document.querySelector(`.${this.cssClass}`).classList.contains("closed")) {
               let burgerOpening = this.burgerDoOpening();

               Promise.all(
                  document.querySelector(`.${this.cssClass}`).getAnimations().map(
                     function (burgerOpening) {
                        return burgerOpening.finished;
                     }
                  )
               ).then(() => {
                  this.burgerPosition(document.querySelector(`.${this.cssClass}`), (this.top - 5), this.left,
                     (this.width + 2), this.height, this.zIndex, this.rotate, this.scale);
               });
            }
         });

      }
   }

   new burgerItem(
      "burger__bun-top",
      // top
      5,
      19,
      // left
      60,
      57.5,
      // width
      40,
      44,
      // height
      220,
      // zIndex
      10,
      10,
      // rotate
      30,
      0,
      1,
      1500,
      ".burger",
   );

   new burgerItem(
      "burger__salad-top",
      // top
      9,
      40,
      // left
      50,
      57,
      // width
      40,
      45,
      // height
      130,
      // zIndex
      9,
      9,
      // rotate
      25,
      0,
      1,
      1200,
      ".burger",
   );
   new burgerItem(
      "burger__mayo-top",
      // top
      19,
      36,
      // left
      55,
      57,
      // width
      32,
      37,
      // height
      100,
      // zIndex
      9,
      9,
      // rotate
      30,
      0,
      -1,
      1500,
      ".burger",
   );
   new burgerItem(
      "burger__cucumber-1",
      // top
      22,
      45,
      // left
      39,
      45,
      // width
      15,
      17,
      // height
      60,
      // zIndex
      8,
      8,
      // rotate
      20,
      0,
      1,
      1300,
      ".burger",
   );
   new burgerItem(
      "burger__cucumber-2",
      // top
      18,
      45,
      // left
      52,
      57,
      // width
      15,
      17,
      // height
      60,
      // zIndex
      8,
      8,
      // rotate
      30,
      0,
      1,
      1300,
      ".burger",
   );
   new burgerItem(
      "burger__cucumber-3",
      // top
      34,
      45,
      // left
      57,
      57,
      // width
      15,
      17,
      // height
      60,
      // zIndex
      8,
      8,
      // rotate
      -10,
      0,
      1,
      1100,
      ".burger",
   );

   new burgerItem(
      "burger__cucumber-4",
      // top
      36,
      45,
      // left
      72,
      70,
      // width
      15,
      17,
      // height
      60,
      // zIndex
      8,
      8,
      // rotate
      40,
      0,
      1,
      1000,
      ".burger",
   );

   new burgerItem(
      "burger__tomato-1",
      // top
      41,
      50,
      // left
      68,
      69,
      // width
      16,
      19,
      // height
      60,
      // zIndex
      7,
      7,
      // rotate
      18,
      0,
      1,
      1200,
      ".burger",
   );

   new burgerItem(
      "burger__tomato-2",
      // top
      52,
      50,
      // left
      54,
      59,
      // width
      16,
      19,
      // height
      60,
      // zIndex
      7,
      7,
      // rotate
      10,
      0,
      1,
      1000,
      ".burger",
   );

   new burgerItem(
      "burger__tomato-3",
      // top
      32,
      50,
      // left
      36,
      46,
      // width
      16,
      19,
      // height
      60,
      // zIndex
      7,
      7,
      // rotate
      -18,
      0,
      1,
      1300,
      ".burger",
   );

   new burgerItem(
      "burger__tomato-4",
      // top
      52,
      50,
      // left
      20,
      59,
      // width
      8,
      19,
      // height
      60,
      // zIndex
      1,
      1,
      // rotate
      45,
      0,
      1,
      1500,
      ".burger",
   );

   new burgerItem(
      "burger__cutlet",
      // top
      54,
      54,
      // left
      55,
      58,
      // width
      45,
      45,
      // height
      160,
      // zIndex
      6,
      6,
      // rotate
      -8,
      0,
      1,
      1500,
      ".burger",
   );


   new burgerItem(
      "burger__onion-1",
      // top
      32,
      67,
      // left
      86,
      70,
      // width
      11,
      12,
      // height
      60,
      // zIndex
      1,
      1,
      // rotate
      25,
      0,
      1,
      1400,
      ".burger",
   );

   new burgerItem(
      "burger__onion-2",
      // top
      57,
      67,
      // left
      68,
      59,
      // width
      8,
      16,
      // height
      60,
      // zIndex
      30,
      5,
      // rotate
      18,
      0,
      1,
      500,
      ".burger",
   );

   new burgerItem(
      "burger__onion-3",
      // top
      56,
      67,
      // left
      39,
      45,
      // width
      11,
      16,
      // height
      60,
      // zIndex
      30,
      5,
      // rotate
      -30,
      0,
      1,
      500,
      ".burger",
   );

   new burgerItem(
      "burger__onion-4",
      // top
      68,
      67,
      // left
      59,
      59,
      // width
      16,
      16,
      // height
      60,
      // zIndex
      7,
      5,
      // rotate
      16,
      0,
      1,
      800,
      ".burger",
   );

   new burgerItem(
      "burger__onion-5",
      // top
      72,
      67,
      // left
      61,
      70,
      // width
      16,
      16,
      // height
      60,
      // zIndex
      7,
      5,
      // rotate
      -20,
      0,
      1,
      800,
      ".burger",
   );

   new burgerItem(
      "burger__onion-6",
      // top
      78,
      67,
      // left
      43,
      45,
      // width
      14,
      16,
      // height
      60,
      // zIndex
      7,
      5,
      // rotate
      20,
      0,
      1,
      800,
      ".burger",
   );

   new burgerItem(
      "burger__cheese",
      // top
      86,
      73,
      // left
      58,
      58,
      // width
      42,
      42,
      // height
      160,
      // zIndex
      5,
      4,
      // rotate
      -16,
      0,
      1,
      1200,
      ".burger",
   );

   new burgerItem(
      "burger__salad-bot",
      // top
      90,
      72,
      // left
      55,
      57,
      // width
      48,
      45,
      // height
      130,
      // zIndex
      4,
      3,
      // rotate
      0,
      0,
      1,
      1200,
      ".burger",
   );

   new burgerItem(
      "burger__mayo-bot",
      // top
      100,
      78,
      // left
      55,
      58,
      // width
      32,
      37,
      // height
      100,
      // zIndex
      2,
      2,
      // rotate
      -10,
      0,
      1,
      1500,
      ".burger",
   );

   new burgerItem(
      "burger__bun-bot",
      // top
      100,
      83,
      // left
      60,
      58,
      // width
      38,
      44,
      // height
      120,
      // zIndex
      1,
      1,
      // rotate
      -12,
      0,
      1,
      1500,
      ".burger",
   );

   new burgerItem(
      "burger__emo-1",
      // top
      110,
      60,
      // left
      30,
      58,
      // width
      5,
      7,
      // height
      70,
      // zIndex
      1,
      1,
      // rotate
      1,
      27,
      1,
      1700,
      ".burger",
   );

   new burgerItem(
      "burger__emo-2",
      // top
      77,
      60,
      // left
      82,
      58,
      // width
      3,
      5,
      // height
      70,
      // zIndex
      1,
      1,
      // rotate
      1,
      27,
      1,
      1700,
      ".burger",
   );

   new burgerItem(
      "burger__emo-3",
      // top
      47,
      60,
      // left
      78,
      58,
      // width
      5,
      7,
      // height
      70,
      // zIndex
      1,
      1,
      // rotate
      1,
      27,
      1,
      1700,
      ".burger",
   );

   new burgerItem(
      "burger__emo-4",
      // top
      47,
      60,
      // left
      26,
      58,
      // width
      3,
      5,
      // height
      40,
      // zIndex
      1,
      1,
      // rotate
      1,
      27,
      1,
      1700,
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
      constructor(src, conImg, alt, title, price, time, oz, kcal, parentSelector,
         obj, imgKey, btnIdM, btnIdP, countId, startMargin, pathMargin) {
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
                  document.querySelector(`#${this.countId}`).innerHTML = ++n;
                  let parentSelectorBur = document.querySelector(".main__const-inner");

                  this.imgKey.push(this.conImg);
                  this.obj.num.push(this.title);
                  let lenghthOfArr = this.obj.num.length;

                  let newItem = document.createElement("div");
                  newItem.classList.add(this.imgKey[this.imgKey.length - 1]);
                  newItem.classList.add("for_comparison");
                  newItem.classList.add("for_start_ani");


                  this.pathMargin.push(this.startMargin);
                  let concatArr = generalObj.margin.cutletMar
                     .concat(generalObj.margin.mayoMar, generalObj.margin.cucumberMar, generalObj.margin.cheeseMar,
                        generalObj.margin.tomatoMar, generalObj.margin.saladMar, generalObj.margin.onionMar,
                        generalObj.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);
                  newItem.style = `top: ${marginFin}%`;
                  parentSelectorBur.append(newItem);


                  let topBun = document.createElement("div");
                  if (lenghthOfArr > 0 && (document.querySelectorAll(".item__topbun").length < 1)) {
                     topBun.classList.add("item__topbun");
                     parentSelectorBur.append(topBun);
                     document.querySelector(".item__topbun").animate([{
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
                     document.querySelector(".item__topbun").animate([{
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

                  let deleted = this.imgKey.pop(this.conImg);

                  let deletedM = this.pathMargin.pop(this.startMargin);

                  let a = "." + this.conImg;
                  let arr = document.querySelectorAll(a);

                  let comparDefin = arr[arr.length - 1].style.top;
                  console.log(arr.length - 1);
                  let classForDelAni = (((this.obj.num.length - 1) % 2) === 0) ? "for_del_ani_left" :
                     "for_del_ani_right";
                  arr[arr.length - 1].classList.replace("for_start_ani", classForDelAni);

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
                     .concat(generalObj.margin.mayoMar, generalObj.margin.cucumberMar, generalObj.margin.cheeseMar,
                        generalObj.margin.tomatoMar, generalObj.margin.saladMar, generalObj.margin.onionMar,
                        generalObj.margin.bunMar);
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