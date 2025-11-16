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
        // Mobile view
        menuItems.forEach((li, index) => {
            if (li !== lastItem) {
                li.style.display = "none";
            }
        });
        lastItem.style.display = "block"; // keep the mobile button visible
    } else {
        // Desktop view
        menuItems.forEach((li) => {
            li.style.display = "block";
        });
    }
}

handleMenuVisibility();
window.addEventListener("resize", handleMenuVisibility);

// Prevent JS from breaking if the button is not found
if (mobileBtn) {
    mobileBtn.addEventListener("click", (event) => {
        event.preventDefault(); // prevents anchor jump

        menuItems.forEach((li) => {
            const isButton = li.querySelector(".mobile-menu") !== null;
            if (!isButton) {
                li.classList.toggle("is-hidden");
            }
        });
    });
}

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
