// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Fade-in animation for sections
const sections = document.querySelectorAll("section, header, footer");

const showSection = () => {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showSection);
showSection();

// Glow effect on images
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.boxShadow = "0 0 20px #00eaff";
    });

    img.addEventListener("mouseout", () => {
        img.style.boxShadow = "none";
    });
});

// Simple console message
console.log("USDTFlash Website Loaded Successfully 🚀");
