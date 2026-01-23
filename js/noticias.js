// Noticias
document.querySelectorAll('.ver-mais').forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.news-item');
        const detalhe = parent.querySelector('.detalhe');
        const link = parent.querySelector('.link-icone');

        if (detalhe.style.display === 'none') {
            detalhe.style.display = 'block';
            link.style.display = 'inline-block';
            parent.classList.add('expanded');
            btn.textContent = 'Ver menos';
        } else {
            detalhe.style.display = 'none';
            link.style.display = 'none';
            parent.classList.remove('expanded');
            btn.textContent = 'Ver mais';
        }
    });
});