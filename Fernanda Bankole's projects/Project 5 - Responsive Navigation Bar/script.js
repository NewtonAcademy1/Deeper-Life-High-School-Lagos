const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

navbarMenu.classList.add('active'); // Initially hide the menu

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})
