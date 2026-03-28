const swiper = new Swiper(".swiper", {
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 32,
    },
  },
  slidesPerView: 1.15,
  spaceBetween: 24,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 400,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const SWIPE_THRESHOLD = 30; // Minimum deltaX to trigger a slide

swiper.el.addEventListener(
  "wheel",
  (e) => {
    if (
      Math.abs(e.deltaX) > Math.abs(e.deltaY) &&
      Math.abs(e.deltaX) > SWIPE_THRESHOLD
    ) {
      e.preventDefault();
      if (e.deltaX > 0) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    }
  },
  { passive: false }
);
