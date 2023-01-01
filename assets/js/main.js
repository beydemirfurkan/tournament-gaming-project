var swiper = new Swiper(".gaming-slide", {
    slidesPerView: 4,
    // centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


var swiperDiamond = new Swiper(".diamond-slide", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})