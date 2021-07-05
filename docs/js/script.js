const hamMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.menu')

hamMenu.addEventListener("click", mobMenu);

function mobMenu() {
    hamMenu.classList.toggle("open-menu");
    mobileMenu.classList.toggle('active');
}