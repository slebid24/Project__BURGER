
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

   // new burgerItem(
   //    "burger__bun-top",
   //    // top
   //    5,
   //    19,
   //    // left
   //    60,
   //    57.5,
   //    // width
   //    40,
   //    44,
   //    // height
   //    220,
   //    // zIndex
   //    10,
   //    10,
   //    // rotate
   //    30,
   //    0,
   //    1,
   //    1500,
   //    ".burger",
   // );

   const arr = [
      {
         class: "burger__bun-top",
         topS: 5,
         topF:19,
         leftS: 60,
         leftF: 57.5,
         widthS: 40,
         widthF: 44,
         height: 220,
         zIndexS: 10,
         zIndexF: 10,
         rotateS: 25,
         rotateF: 0,
         scale: 1,
         duration: 1500,
         parent: ".burger"

      },
      {
         class: "burger__salad-top",
         topS: 9,
         topF: 40,
         leftS: 50,
         leftF: 57,
         widthS: 40,
         widthF: 45,
         height: 130,
         zIndexS: 9,
         zIndexF: 9,
         rotateS: 30,
         rotateF: 0,
         scale: 1,
         duration: 1200,
         parent: ".burger"

      },
      {
         class: "burger__mayo-top",
         topS: 19,
         topF: 36,
         leftS: 55,
         leftF: 57,
         widthS: 32,
         widthF: 37,
         height: 100,
         zIndexS: 9,
         zIndexF: 9,
         rotateS: 30,
         rotateF: 0,
         scale: -1,
         duration: 1500,
         parent: ".burger"
      },
      {
         class: "burger__cucumber-1",
         topS: 22,
         topF: 45,
         leftS: 39,
         leftF: 45,
         widthS: 15,
         widthF: 17,
         height: 60,
         zIndexS: 8,
         zIndexF: 8,
         rotateS: 20,
         rotateF: 0,
         scale: 1,
         duration: 1300,
         parent: ".burger"
      },
      {
         class: "burger__cucumber-2",
         topS: 18,
         topF: 45,
         leftS: 52,
         leftF: 57,
         widthS: 15,
         widthF: 17,
         height: 60,
         zIndexS: 8,
         zIndexF: 8,
         rotateS: 30,
         rotateF: 0,
         scale: 1,
         duration: 1300,
         parent: ".burger"
      },
      {
         class: "burger__cucumber-3",
         topS: 34,
         topF: 45,
         leftS: 57,
         leftF: 57,
         widthS: 15,
         widthF: 17,
         height: 60,
         zIndexS: 8,
         zIndexF: 8,
         rotateS: -10,
         rotateF: 0,
         scale: 1,
         duration: 1100,
         parent: ".burger"
      },
      {
         class: "burger__cucumber-4",
         topS: 36,
         topF: 45,
         leftS: 72,
         leftF: 70,
         widthS: 15,
         widthF: 17,
         height: 60,
         zIndexS: 8,
         zIndexF: 8,
         rotateS: 40,
         rotateF: 0,
         scale: 1,
         duration: 1000,
         parent: ".burger"
      },
      {
         class: "burger__tomato-1",
         topS: 41,
         topF: 50,
         leftS: 68,
         leftF: 69,
         widthS: 16,
         widthF: 19,
         height: 60,
         zIndexS: 7,
         zIndexF: 7,
         rotateS: 18,
         rotateF: 0,
         scale: 1,
         duration: 1200,
         parent: ".burger"
      },
      {
         class: "burger__tomato-2",
         topS: 52,
         topF: 50,
         leftS: 54,
         leftF: 59,
         widthS: 16,
         widthF: 19,
         height: 60,
         zIndexS: 7,
         zIndexF: 7,
         rotateS: 10,
         rotateF: 0,
         scale: 1,
         duration: 1000,
         parent: ".burger"
      },
      {
         class: "burger__tomato-3",
         topS: 32,
         topF: 50,
         leftS: 36,
         leftF: 46,
         widthS: 16,
         widthF: 19,
         height: 60,
         zIndexS: 7,
         zIndexF: 7,
         rotateS: -18,
         rotateF: 0,
         scale: 1,
         duration: 1300,
         parent: ".burger"
      },
      {
         class: "burger__tomato-4",
         topS: 52,
         topF: 50,
         leftS: 20,
         leftF: 59,
         widthS: 8,
         widthF: 19,
         height: 60,
         zIndexS: 1,
         zIndexF: 1,
         rotateS: 45,
         rotateF: 0,
         scale: 1,
         duration: 1500,
         parent: ".burger"
      },
      {
         class: "burger__cutlet",
         topS: 54,
         topF: 54,
         leftS: 55,
         leftF: 58,
         widthS: 45,
         widthF: 45,
         height: 160,
         zIndexS: 6,
         zIndexF: 6,
         rotateS: -8,
         rotateF: 0,
         scale: 1,
         duration: 1500,
         parent: ".burger"
      },
      {
         class: "burger__onion-1",
         topS: 32,
         topF: 67,
         leftS: 86,
         leftF: 70,
         widthS: 11,
         widthF: 12,
         height: 60,
         zIndexS: 1,
         zIndexF: 1,
         rotateS: 25,
         rotateF: 0,
         scale: 1,
         duration: 1400,
         parent: ".burger"
      },
      {
         class: "burger__onion-2",
         topS: 57,
         topF: 67,
         leftS: 68,
         leftF: 59,
         widthS: 8,
         widthF: 16,
         height: 60,
         zIndexS: 30,
         zIndexF: 5,
         rotateS: 18,
         rotateF: 0,
         scale: 1,
         duration: 500,
         parent: ".burger"
      }
   ]


   arr.forEach(item => {
      const keys = Object.keys(item)
      new burgerItem(...keys.map(key => item[key]))
   })

   // new burgerItem(
   //    "burger__onion-2",
   //    // top
   //    57,
   //    67,
   //    // left
   //    68,
   //    59,
   //    // width
   //    8,
   //    16,
   //    // height
   //    60,
   //    // zIndex
   //    30,
   //    5,
   //    // rotate
   //    18,
   //    0,
   //    1,
   //    500,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__onion-3",
   //    // top
   //    56,
   //    67,
   //    // left
   //    39,
   //    45,
   //    // width
   //    11,
   //    16,
   //    // height
   //    60,
   //    // zIndex
   //    30,
   //    5,
   //    // rotate
   //    -30,
   //    0,
   //    1,
   //    500,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__onion-4",
   //    // top
   //    68,
   //    67,
   //    // left
   //    59,
   //    59,
   //    // width
   //    16,
   //    16,
   //    // height
   //    60,
   //    // zIndex
   //    7,
   //    5,
   //    // rotate
   //    16,
   //    0,
   //    1,
   //    800,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__onion-5",
   //    // top
   //    72,
   //    67,
   //    // left
   //    61,
   //    70,
   //    // width
   //    16,
   //    16,
   //    // height
   //    60,
   //    // zIndex
   //    7,
   //    5,
   //    // rotate
   //    -20,
   //    0,
   //    1,
   //    800,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__onion-6",
   //    // top
   //    78,
   //    67,
   //    // left
   //    43,
   //    45,
   //    // width
   //    14,
   //    16,
   //    // height
   //    60,
   //    // zIndex
   //    7,
   //    5,
   //    // rotate
   //    20,
   //    0,
   //    1,
   //    800,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__cheese",
   //    // top
   //    86,
   //    73,
   //    // left
   //    58,
   //    58,
   //    // width
   //    42,
   //    42,
   //    // height
   //    160,
   //    // zIndex
   //    5,
   //    4,
   //    // rotate
   //    -16,
   //    0,
   //    1,
   //    1200,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__salad-bot",
   //    // top
   //    90,
   //    72,
   //    // left
   //    55,
   //    57,
   //    // width
   //    48,
   //    45,
   //    // height
   //    130,
   //    // zIndex
   //    4,
   //    3,
   //    // rotate
   //    0,
   //    0,
   //    1,
   //    1200,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__mayo-bot",
   //    // top
   //    100,
   //    78,
   //    // left
   //    55,
   //    58,
   //    // width
   //    32,
   //    37,
   //    // height
   //    100,
   //    // zIndex
   //    2,
   //    2,
   //    // rotate
   //    -10,
   //    0,
   //    1,
   //    1500,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__bun-bot",
   //    // top
   //    100,
   //    83,
   //    // left
   //    60,
   //    58,
   //    // width
   //    38,
   //    44,
   //    // height
   //    120,
   //    // zIndex
   //    1,
   //    1,
   //    // rotate
   //    -12,
   //    0,
   //    1,
   //    1500,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__emo-1",
   //    // top
   //    110,
   //    60,
   //    // left
   //    30,
   //    58,
   //    // width
   //    5,
   //    7,
   //    // height
   //    70,
   //    // zIndex
   //    1,
   //    1,
   //    // rotate
   //    1,
   //    27,
   //    1,
   //    1700,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__emo-2",
   //    // top
   //    77,
   //    60,
   //    // left
   //    82,
   //    58,
   //    // width
   //    3,
   //    5,
   //    // height
   //    70,
   //    // zIndex
   //    1,
   //    1,
   //    // rotate
   //    1,
   //    27,
   //    1,
   //    1700,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__emo-3",
   //    // top
   //    47,
   //    60,
   //    // left
   //    78,
   //    58,
   //    // width
   //    5,
   //    7,
   //    // height
   //    70,
   //    // zIndex
   //    1,
   //    1,
   //    // rotate
   //    1,
   //    27,
   //    1,
   //    1700,
   //    ".burger",
   // );

   // new burgerItem(
   //    "burger__emo-4",
   //    // top
   //    47,
   //    60,
   //    // left
   //    26,
   //    58,
   //    // width
   //    3,
   //    5,
   //    // height
   //    40,
   //    // zIndex
   //    1,
   //    1,
   //    // rotate
   //    1,
   //    27,
   //    1,
   //    1700,
   //    ".burger",
   // );

}

export default firstPageAnimat;