const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the nav-links visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
