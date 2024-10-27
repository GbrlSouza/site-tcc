document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav_list a');
    const navItems = document.querySelectorAll('.nav-item');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Atualiza o estado ativo
            navItems.forEach(item => item.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});

function showLoader(event) {
    event.preventDefault(); // Impede o redirecionamento imediato
    const loader = document.getElementById('loader');
    const overlay = document.getElementById('overlay');

    loader.style.display = 'block'; // Exibe a bolinha
    overlay.style.display = 'block'; // Exibe o overlay

    setTimeout(() => {
        overlay.style.display = 'none'; // Oculta o overlay
        loader.style.display = 'none'; // Oculta a bolinha
        window.location.href = event.target.href; // Redireciona
    }, 2000); // Espera 2 segundos
}

