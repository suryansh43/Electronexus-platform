// Smooth scroll from hero button
function scrollToSection() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// Active navbar highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
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

// Dark mode toggle
function toggleDark() {
    document.body.classList.toggle("dark");
}