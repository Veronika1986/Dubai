var menu__arrow = document.querySelectorAll(".menu__arrow");
for (let index = 0; index < menu__arrow.length; index++) {
   var menu__arrows = menu__arrow[index]; 
menu__arrows.addEventListener("click",() =>{
menu__arrows.parentElement.classList.toggle("active");
} );
};
$(document).ready(function(){
   $(".slider-container").slick({
   arrows:false,
   dots:true,
   slidesToShow:4,
   slidesToScroll:4,
   autoplay:true,
   autoplaySpeed:1500,
   pauseOnFocus:true,
   pauseOnHover:true,
   pauseOnDotsHover:true,
   responsive:[{
      breakpoint: 767.98,
      settings: {
         slidesToShow:2,
         slidesToScroll:2,
      }
   }]
   });
});

new Swiper(".feedback__slider-block", {
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
   },

   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   mousewheel: {
      sensitivity: 1,
   }, 
   
   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 10,
         slidesPerGroup: 1,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 15,
         slidesPerGroup: 2,
      },
      1440: {
         slidesPerView: 3,
         spaceBetween: 30,
         slidesPerGroup: 3,
      },
   }
})

var accordeonBtns = document.querySelectorAll(".faq__accordeon-title")
   if (accordeonBtns.length > 0) {
      for (let index = 0; index < accordeonBtns.length; index++) {
         const accordeonBtn = accordeonBtns[index];
         accordeonBtn.addEventListener("click", () => {
            accordeonBtn.parentElement.classList.toggle("active")
      
         })
      }
   }else {

   };

var footerBtns = document.querySelectorAll(".footer__item-title")
   if (footerBtns.length > 0) {
      for (let index = 0; index < footerBtns.length; index++) {
         const footerBtn = footerBtns[index];
         footerBtn.addEventListener("click", () => {
            footerBtn.parentElement.classList.toggle("active")
      
         })
      }
   }else {

   }
