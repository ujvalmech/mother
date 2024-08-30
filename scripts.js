document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu for mobile view
    const menuToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Toggle Read More / Read Less for menu items
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.previousElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                button.textContent = 'Read More';
            } else {
                details.style.display = 'block';
                button.textContent = 'Read Less';
            }
        });
    });

    // Show Back to Top button on scroll
    const backToTopButton = document.querySelector('.back-to-home');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
