window.addEventListener('DOMContentLoaded', (event) => {
    addToggleClassHideElement();
});
function addToggleClassHideElement() {
    var el = document.querySelector(".navigation .menuButtonStyle button.menuHamburger");
    el.addEventListener("click", function(){ 
        var navItems = document.querySelectorAll(".navigation ul li");
        navItems.forEach(element => {
            if(!element.firstChild.classList.contains("menuHamburger")){
                if(element.classList.contains("hideElement")){
                    element.classList.remove("hideElement");
                }else{
                    element.classList.add("hideElement");
                }
            }
        });
    });
  }