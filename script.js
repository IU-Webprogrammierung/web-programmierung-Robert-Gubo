// Navi

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const listContainer = document.getElementsByClassName("list-container")[0];

toggleButton.addEventListener("click", () => {
    listContainer.classList.toggle("active");
});

// Funktion, um Top Button nach oben zu scrollen
function topFunction() {
    // Scrollen zur oberen Position der Seite mit Animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// TopFunktion aktivieren
document.getElementById("topBtn").addEventListener("click", topFunction);

// Button fixieren
window.addEventListener("scroll", function() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || window.scrollY > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Slideshow Funfacts

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

showSlide(slideIndex);
