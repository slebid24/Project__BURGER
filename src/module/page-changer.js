
function pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, mainBtn) {
   const width = (wrapper.offsetWidth - 20);
   const widthAfterSwipe = page1.offsetWidth;
   let offset = 0;
   field.style.width = width * pages.length + "px";
   page2.style.width = width + "px";
   field.style.display = "flex";
   field.style.transition = "0.8s all";
   console.log(pages)
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

   function doSwitch(btn1, btn2) {
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
   console.log(mainBtn)
}

export default pageChanger;