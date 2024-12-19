// Updated script.js
// Adding interactivity for navigation links

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website fully loaded and functional');

    // Smooth scroll to sections
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').replace('.html', '');
            const targetSection = document.querySelector(`section#${sectionId}`);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example interactivity: Highlight active link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
