
function modal() {
   let modalButton = document.querySelector(".main__btn-checkout");
   let modalSelector = document.querySelector(".modal");
   let background = document.querySelector(".wrapper");
   
   
   function closeModal(modalSelector, background) {
      modalSelector.style.display = "none";
      background.style.filter = "blur(0px)";
   }

   function openModal(modalSelector, background) {
      modalSelector.style.display = "block";
      background.style.filter = "blur(3px)";
   }

   function modal(modalSelector, background) {

      let modalStyle = getComputedStyle(modalSelector);
      
      modalButton.addEventListener("click", () => {
         openModal(modalSelector, background);
      });

      modalSelector.addEventListener("click", (e) => {
         if (e.target === modalSelector || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector, background);
            
         }
      });
   
      document.addEventListener("keydown", (e) => {
         if (e.code === "Escape" && modalStyle.display == "block") {
            closeModal(modalSelector, background);
         }
      });
   }

   modal(modalSelector, background);
}

export default modal;