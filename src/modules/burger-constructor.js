import ItemCalculationData from "./data/calculation-item-data";

function burgerConstructor(dataForVisualization, orderData, arr) {
   class ItemCalculation {
      constructor(btnIdM, btnIdP, countId, title, conImg, price, time, oz, kcal,
                  dataForVisualization, orderData, imgKey, startMargin, pathMargin) {
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;   
         this.countId = countId;
         this.title = title;
         this.conImg = conImg;
         this.price = price;
         this.time = time;
         this.oz = oz;
         this.kcal = kcal;
         this.dataForVisualization = dataForVisualization;
         this.orderData = orderData;
         this.imgKey = imgKey;
         this.startMargin = startMargin;
         this.pathMargin = pathMargin;
         this.counter();
         this.setDefault();
         
      }

      setDefault () {
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
                  this.orderData.recipe.push(this.title);
                  let lenghthOfArr = this.orderData.recipe.length;

                  let newItem = document.createElement("div");
                  newItem.classList.add(this.imgKey[this.imgKey.length - 1]);
                  newItem.classList.add("for_comparison");
                  newItem.classList.add("for_start_ani");

                  this.pathMargin.push(this.startMargin);
                  let concatArr = dataForVisualization.margin.cutletMar
                     .concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar,
                        dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar,
                        dataForVisualization.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);
                  newItem.style = `top: ${marginFin}%`;
                  parentSelectorBur.append(newItem);

                  console.log(dataForVisualization)
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

                  
                  this.orderData.sum.push(this.price);
                  let num = this.orderData.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  this.orderData.time.push(this.time);
                  let numTime = this.orderData.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;

                  this.orderData.oz.push(this.oz);
                  let numOz = this.orderData.oz;
                  let sumOz = numOz.reduce((sum, current) => sum + current);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;

                  this.orderData.kcal.push(this.kcal);
                  let numKcal = this.orderData.kcal;
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

                  this.imgKey.pop(this.conImg);

                  let deletedM = this.pathMargin.pop(this.startMargin);

                  let a = "." + this.conImg;
                  let arr = document.querySelectorAll(a);

                  let comparDefin = arr[arr.length - 1].style.top;
                  console.log(arr.length - 1);
                  let classForDelAni = (((this.orderData.recipe.length - 1) % 2) === 0) ? "for_del_ani_left" :
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

                  let concatArr = dataForVisualization.margin.cutletMar
                     .concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar,
                        dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar,
                        dataForVisualization.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);

                  setTimeout(() => {
                     if (lenghthOfArr > 0) {
                        document.querySelector(".item__topbun").style.top = `${parseInt(marginFin) - 90}%`;

                     }
                  }, 220);

                  this.orderData.recipe.pop(this.num);
                  let lenghthOfArr = this.orderData.recipe.length;

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

                  this.orderData.sum.pop(this.price);
                  let num = this.orderData.sum;
                  let sumprice = num.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  this.orderData.time.pop(this.time);
                  let numTime = this.orderData.time;
                  let sumTime = numTime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;

                  this.orderData.oz.pop(this.oz);
                  let numOz = this.orderData.oz;
                  let sumOz = numOz.reduce((sum, current) => sum + current);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;

                  this.orderData.kcal.pop(this.kcal);
                  let numKcal = this.orderData.kcal;
                  let sumKcal = numKcal.reduce((sum, current) => sum + current);
                  document.querySelector(".main__kcal").innerHTML = `${sumKcal} kcal`;

               } else {
                  return;
               }
            }, 200);
         });
      }
   }

   arr(dataForVisualization, orderData).forEach(item => {
      const keys = Object.keys(item)
      new ItemCalculation(...keys.map(key => item[key]))
   })
}

export default burgerConstructor;