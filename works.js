$('.slider-block').slick( {
   dots:true,
   autoplay:true,
});


// ***    Изменяем лайк кнопку  второй вариант

let likedBtns = document.querySelectorAll(".favorite-icon");

likedBtns.forEach((item) => {
    item.addEventListener("click", function(){
        item.classList.toggle("liked")
    })
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