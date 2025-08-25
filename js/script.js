// script.js - Funções JS do currículo

document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeToggle');
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelector('.header').classList.toggle('dark-mode');
        document.querySelector('.contact-grid').classList.toggle('dark-mode');
        document.querySelectorAll('.contact-item').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.section').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.job').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelector('.skills-grid').classList.toggle('dark-mode');
        document.querySelectorAll('.skill-item').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.certification').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.certification-badge').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.education-card').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.summary-text').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.profile-photo').forEach(e => e.classList.toggle('dark-mode'));
        document.querySelectorAll('.header-info').forEach(e => e.classList.toggle('dark-mode'));
    });
});
