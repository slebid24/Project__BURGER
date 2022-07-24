import animationData from "./animation-data";

function firstPageAnimat(mainBtn, firstPageBtn, secondPageBtn) {
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

   animationData().forEach(item => {
      const keys = Object.keys(item)
      new burgerItem(...keys.map(key => item[key]))
   })

}

export default firstPageAnimat;