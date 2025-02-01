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

document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your request has been received. We will contact you soon.`);

    // Optionally, you can clear the form after submission
    document.getElementById("quoteForm").reset();

    // Close the modal after form submission
    let modal = new bootstrap.Modal(document.getElementById('quoteModal'));
    modal.hide();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("checkbox");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");

    function moveCarousel() {
        let firstCard = carousel.firstElementChild;
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateX(-320px)"; // Move left (width + gap)

        setTimeout(() => {
            carousel.appendChild(firstCard); // Move first card to end
            carousel.style.transition = "none"; // Remove transition for instant reset
            carousel.style.transform = "translateX(0)"; // Reset position
        }, 500); // Wait for animation to complete
    }

    setInterval(moveCarousel, 2000); // Move every 2 seconds
});

