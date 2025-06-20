const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");



menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-menu");
});

menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
        slidePerView: 1
},
768:{
            slidePerView: 2
},
        1024:{
            slidePerView: 3
        }
    }
});