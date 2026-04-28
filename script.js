// Simple smooth scroll and basic interaction
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.background = window.scrollY > 50 ? '#2c3e50' : 'transparent';
});