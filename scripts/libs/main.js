// document.addEventListener('DOMCcontentLoaded',function(){
//     const slider = new Slider
// });

// class Slider {
//     constructor() {
//         this.swiper = new Swiper('.swiper-container', {
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             effect: 'fade',
//             centeredSlide: true,
          
//             // If we need pagination
//             pagination: {
//               el: '.swiper-pagination',
//             },
          
//             // Navigation arrows
//             navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
          
//             // And if we need scrollbar
//             scrollbar: {
//               el: '.swiper-scrollbar',
//             },
//           });
//     }
// }

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCersol: true,
    effect: 'fade',
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });