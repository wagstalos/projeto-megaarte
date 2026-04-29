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
  const heroSlides = document.querySelectorAll(".swiper-hero .swiper-wrapper .swiper-slide");
  const heroCurrent = document.querySelector(".s-hero__slider-current");
  const heroTotal = document.querySelector(".s-hero__slider-total");
  const heroTimerFill = document.querySelector(".s-hero__slider-timer-fill");
  const heroAutoplayDelay = 4000;

  function formatSlideNumber(value) {
    return String(value).padStart(2, "0");
  }

  function restartHeroTimer() {
    if (!heroTimerFill) return;
    heroTimerFill.style.animation = "none";
    // Force reflow to restart CSS animation cleanly
    heroTimerFill.offsetHeight;
    heroTimerFill.style.animation = `heroTimerFill ${heroAutoplayDelay}ms linear forwards`;
  }

  const swiperHero = new Swiper(".swiper-hero", {
    speed: 600,
    autoplay: {
      delay: heroAutoplayDelay,
      disableOnInteraction: false
    },
    loop: true,
    on: {
      init: function () {
        if (heroTotal) heroTotal.textContent = formatSlideNumber(heroSlides.length);
        if (heroCurrent) heroCurrent.textContent = formatSlideNumber(this.realIndex + 1);
        restartHeroTimer();
      },
      slideChangeTransitionStart: function () {
        if (heroCurrent) heroCurrent.textContent = formatSlideNumber(this.realIndex + 1);
        restartHeroTimer();
      }
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
