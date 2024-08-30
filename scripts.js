// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const backToHomeBtn = document.querySelector('.back-to-home');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToHomeBtn.style.display = 'block';
        } else {
            backToHomeBtn.style.display = 'none';
        }
    });

    backToHomeBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
