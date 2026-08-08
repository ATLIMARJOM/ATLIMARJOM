document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        // Abre e fecha o menu ao clicar no ícone hambúrguer
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer item do menu
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
