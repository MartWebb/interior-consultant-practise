console.log('hi!')
const burgerBtn = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav-list");
const mainSetup = document.querySelectorAll(".menu-setup");


const closeMenu = document.querySelector(".nav-menu-close");
burgerBtn.addEventListener("click", () => {
    nav.classList.toggle('special-nav')
    nav.classList.toggle('open');
    burgerBtn.classList.toggle('cancel');
    burgerBtn.style.position = "absolute"
});

