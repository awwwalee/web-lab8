console.log('Сайт веб-разработчика загружен');

// Обновляем год в футере
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем год
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${year} Веб-разработчик. Лабораторная работа по веб-технологиям.`;
    }
    
    // Выделяем активную страницу в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});