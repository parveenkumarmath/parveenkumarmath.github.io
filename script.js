// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

// ===============================
// Navbar Background on Scroll
// ===============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 60) {

        nav.style.background = "#081b33";
        nav.style.padding = "14px 8%";
        nav.style.transition = "0.3s";

    } else {

        nav.style.background = "#0b2545";
        nav.style.padding = "18px 8%";

    }

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Fade-in Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card,.publication,.timeline li,.contact-box")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Hero Image Hover Effect
// ===============================

const image = document.querySelector(".hero-image img");

if (image) {

    image.addEventListener("mousemove", () => {

        image.style.transform = "scale(1.05) rotate(1deg)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1) rotate(0deg)";

    });

}

// ===============================
// Typing Effect
// ===============================

const text = [
    "Inverse Problems",
    "Partial Differential Equations",
    "Carleman Estimates",
    "Heat & Wave Equations"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.getElementById("typing");

function type() {

    if (!typingElement) return;

    if (count === text.length) {

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 90);

    }

}

type();
