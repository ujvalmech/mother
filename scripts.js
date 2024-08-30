document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
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
});
