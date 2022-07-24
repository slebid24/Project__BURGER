import ingradientMenuData from "./data/ingradiets-menu-data";

function ingradientMenu(data) {
   class Ingradiet {
      constructor(src,  alt, parentSelector,
                  btnIdM, btnIdP, countId, title,) {
         this.src = src;
         this.alt = alt;
         this.parent = document.querySelector(parentSelector);
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;
         this.countId = countId;
         this.title = title;
         this.render();
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
   }

   

   data().forEach(item => {
      const keys = Object.keys(item)
      new Ingradiet(...keys.map(key => item[key]))
   })
   console.log(ingradientMenuData())
}

export default ingradientMenu;