
const menuToggle = document.getElementById("menu-toggle");

const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

const scrollTopButton = document.getElementById("scroll-top");

// Show button when page is scrolled
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }

});

// Return to the top when clicked
scrollTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const revealElements = document.querySelectorAll(
    ".about-content, .skills-content, .projects-content, .contact-content"
);

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal", "active");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
