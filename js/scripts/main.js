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

  const heroSection = document.querySelector('.s-hero');
  if (heroSection) {
    const images = ['url("../img/hero.jpg")', 'url("../img/hero2.jpg")', 'url("../img/hero3.jpg")'];
    
    // Pré-carregamento das imagens (loader)
    images.forEach(imgUrl => {
      const img = new Image();
      const match = imgUrl.match(/url\("(.+)"\)/);
      if (match) img.src = match[1];
    });

    let currentImageIndex = 0;
    heroSection.style.transition = "background-image 4s ease-in-out, background 4s ease-in-out"; // Transição mais sutil e longa

    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), ${images[currentImageIndex]}`;
    }, 6000); // Aumentado para 6s para dar tempo da transição longa
  }
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
