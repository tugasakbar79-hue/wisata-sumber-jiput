// ================================
// Navbar berubah saat di-scroll
// ================================

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0b5d36";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#0d7a44";
        header.style.boxShadow = "none";
    }
});

// ================================
// Efek muncul saat scroll
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ================================
// Efek zoom gambar galeri
// ================================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        if (img.style.transform == "scale(1.5)") {

            img.style.transform = "scale(1)";

        } else {

            img.style.transform = "scale(1.5)";

        }

    });

});