// script.js
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-output", {
        strings: [
            "We specialize in Web Development.",
            "We build Mobile Apps.",
            "We create AI Solutions."
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });
});

