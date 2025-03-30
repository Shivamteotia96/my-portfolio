// Get DOM Elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const themeSwitch = document.querySelector('#switch');

// Toggle Mobile Menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close Mobile Menu
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Dark Mode Toggle
function toggleTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// Check Saved Theme Preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      closeMenu();
    }
  });
});

// Update Copyright Year
document.getElementById('datee').textContent = new Date().getFullYear();

// Event Listeners
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
themeSwitch.addEventListener('change', toggleTheme);

// Animate on Scroll
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.8;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});
