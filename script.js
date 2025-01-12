document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
        
        // Rotate the button
        button.classList.toggle('rotate');
    });
});

const navbar = document.getElementById("navbar");
const heroSection = document.getElementById("hero");

window.addEventListener("scroll", () => {
    const heroSectionBottom = heroSection.offsetHeight;

    if (window.scrollY > heroSectionBottom) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

