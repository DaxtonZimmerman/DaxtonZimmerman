const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('nextSlide');
const prevButton = document.getElementById('prevSlide');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const cardButtons = document.querySelectorAll('.card-btn');
let currentSlide = 0;
let slideInterval = null;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlider() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  slideInterval = setInterval(nextSlide, 5500);
}

function toggleMenu() {
  siteNav.classList.toggle('open');
}

function animateCard(event) {
  const button = event.currentTarget;
  button.classList.add('animate');
  setTimeout(() => button.classList.remove('animate'), 300);
}

function initPage() {
  if (nextButton && prevButton && slides.length) {
    nextButton.addEventListener('click', () => {
      nextSlide();
      startAutoSlider();
    });
    prevButton.addEventListener('click', () => {
      prevSlide();
      startAutoSlider();
    });
    startAutoSlider();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', toggleMenu);
  }

  cardButtons.forEach((button) => {
    button.addEventListener('click', animateCard);
  });
}

window.addEventListener('DOMContentLoaded', initPage);
