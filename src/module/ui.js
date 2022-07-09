
function ui() {
   const topBtns = document.querySelectorAll(".header__page-changer");
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
}

export default ui;