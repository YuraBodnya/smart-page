// VanillaTilt.init(document.querySelectorAll(".working__card"), {
//    max: 25,
//    speed: 400
// });

const swiper = new Swiper('.clients__swiper', {
   // Optional parameters
   loop: true,
   spaceBetween: 20,
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
      },
      1245: {
         slidesPerView: 2,
      },
   },
   // If we need pagination
   pagination: {
      el: '.clients__swiper-pagination',
      clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.clients__swiper-button-next',
     prevEl: '.clients__swiper-button-prev',
   },
 
 });