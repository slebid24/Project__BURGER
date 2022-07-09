
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

}

export default firstPageAnimat;