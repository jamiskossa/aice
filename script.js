document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffeb3b';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});

