document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');
    const inputField = document.getElementById('fullName'); // Example input field

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        inputField.focus(); // Set focus to the input field when the hamburger is clicked
    });
});
