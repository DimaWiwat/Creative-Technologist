let tabs = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items")

function hideTabContent() {
   tabContent.forEach(tab => {
      tab.classList.add("hide");
      tab.classList.remove("show");
   })

   tabs.forEach(item => {
      item.classList.remove("tab-active");
   })
}

function showTabContent(item = 0) {
   tabContent[item].classList.add("show");
   tabContent[item].classList.remove("hide");
   tabs[item].classList.add("tab-active");
}

hideTabContent()
showTabContent()

tabsWrap.addEventListener("click",function(e) {
   let target = e.target

   if(target && target.classList.contains("tab-title-item")) {
      tabs.forEach((item,i) => {
         if (target === item) {
            hideTabContent();
            showTabContent(i);
         }
      })
   }
})

// mobile menu

let mobileMenu = document.querySelector('.nav-mobile-menu');
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
   mobileMenu.classList.toggle("active-menu");
   if(mobileMenu.classList.contains("active-menu")) {
      mainMenu.classList.add("active-menu");
   } else {
      mainMenu.classList.remove("active-menu");
   }  

})