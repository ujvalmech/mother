document.addEventListener('DOMContentLoaded', function() {
    const backToHomeButton = document.querySelector('.back-to-home');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToHomeButton.style.display = 'block';
        } else {
            backToHomeButton.style.display = 'none';
        }
    });
});
