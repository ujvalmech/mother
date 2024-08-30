document.addEventListener('DOMContentLoaded', function() {
    const backToHomeButton = document.querySelector('.back-to-home');
    const navbarMenu = document.querySelector('.navbar-menu');

    // Show/Hide "Back to Home" button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToHomeButton.style.display = 'block';
        } else {
            backToHomeButton.style.display = 'none';
        }
    });

    // Toggle Navbar menu on smaller screens
    document.querySelector('.navbar-logo').addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});
