// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
