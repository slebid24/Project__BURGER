


function burgerConstructor() {
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
}

export default burgerConstructor;