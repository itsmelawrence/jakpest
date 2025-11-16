import "./bootstrap";
import Swiper from "swiper";
import "swiper/css";

// =======================
// Floating Nav (Fixed on Scroll)
// =======================

const navBar = document.querySelector(".main-navigation-bar");
const navWrapper = document.querySelector(".main-navigation-container");

const navOffset = navBar.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY > navOffset) {
        navBar.classList.add("fixed-header");
    } else {
        navBar.classList.remove("fixed-header");
    }
});

// =======================
// Mobile / Desktop Menu Logic
// =======================

const navList = document.querySelector(
    ".main-navigation-content.is-horizontal ul"
);
const menuItems = navList.querySelectorAll("li");
const mobileBtn = navList.querySelector(".mobile-menu");

const mq = window.matchMedia("(max-width: 1000px)");

function handleMenuVisibility() {
    const menuItems = document.querySelectorAll("ul li");
    const lastItem = menuItems[menuItems.length - 1]; // mobile button

    if (window.matchMedia("(max-width: 1000px)").matches) {
        // Mobile view: hide menu items, show mobile button
        menuItems.forEach((li, index) => {
            if (li !== lastItem) {
                li.style.display = "none";
            }
        });
        lastItem.style.display = "block"; // show mobile button
    } else {
        // Desktop view: show menu items, hide mobile button
        menuItems.forEach((li, index) => {
            if (li !== lastItem) {
                li.style.display = "block";
            } else {
                li.style.display = "none"; // hide mobile button
            }
        });
    }
}

// Initial run
handleMenuVisibility();

// Listen for window resize
window.addEventListener("resize", handleMenuVisibility);

// =======================
// Swiper
// =======================

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    spaceBetween: 20,
    loop: false,

    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
