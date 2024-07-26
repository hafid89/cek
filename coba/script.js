// banner dan sticky navbar
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// carousel
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    indicators[i].classList.toggle("active", i === currentIndex);
  });
}

function moveSlide(step) {
  showSlide((currentIndex += step));
  resetInterval();
}

function currentSlide(index) {
  showSlide((currentIndex = index - 1));
  resetInterval();
}

function autoPlay() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // Ganti 3000 dengan waktu yang diinginkan dalam milidetik
}

function resetInterval() {
  clearInterval(slideInterval);
  autoPlay();
}

showSlide(currentIndex);
autoPlay();
// carousel end

// hamburger menu 
function toggleMenu() {
  const ulc = document.querySelector('.ulc');
  ulc.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabIndicator = document.querySelector(".tab-indicator");

  function setTabIndicator() {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
      const tabWidth = activeTab.offsetWidth;
      const tabOffsetLeft = activeTab.offsetLeft;
      tabIndicator.style.width = `${tabWidth}px`;
      tabIndicator.style.transform = `translateX(${tabOffsetLeft}px)`;
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const target = this.getAttribute("data-tab");

      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(content => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });

      this.classList.add("active");
      setTabIndicator(); // Update the position of the tab indicator
    });
  });

  // Initialize the tab indicator on page load
  setTabIndicator();
});
