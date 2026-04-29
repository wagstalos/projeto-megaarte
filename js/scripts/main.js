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

  const swiperHero = new Swiper(".swiper-hero", {
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    pagination: {
      el: ".swiper-hero .swiper-pagination",
      clickable: true,
    },
  });

  const swiper = new Swiper(".s-feedback .swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".s-feedback .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".s-feedback .swiper-button-next",
      prevEl: ".s-feedback .swiper-button-prev",
    },
  });

  const swiperService = new Swiper(".swiper-service", {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-service .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-service .swiper-button-next",
      prevEl: ".swiper-service .swiper-button-prev",
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
