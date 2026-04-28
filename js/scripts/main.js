AOS.init();

function initThemeSwitcher() {
  const dots = document.querySelectorAll('.theme-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      document.documentElement.style.setProperty('--brand-main', color);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  const swiper = new Swiper(".s-feedback .swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperService = new Swiper(".swiper-service", {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
      }
    }
  });
});
