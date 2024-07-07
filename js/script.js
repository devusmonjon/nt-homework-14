"use strict";
const header = document.querySelector(".header"),
    btnTotop = document.querySelector(".btn-totop");

window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        header.style.transform = "translateY(-71px)";
        btnTotop.classList.add("active");
    } else {
        header.style.transform = "translateY(0)";
        btnTotop.classList.remove("active");
    }
    if (scrollY > 200) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

btnTotop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
