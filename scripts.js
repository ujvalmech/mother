document.addEventListener('DOMContentLoaded', function() {
    // Handle the navbar toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Smooth scrolling to top
    const backToHomeButton = document.querySelector('.back-to-home');

    backToHomeButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
