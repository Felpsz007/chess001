document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const topNavigation = document.querySelector('.top-navigation');
    
    // Função para alternar a visibilidade da barra lateral com suavidade
    sidebarToggle.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            sidebar.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            sidebar.style.transform = 'translateX(-100%)'; // Transição para fora da tela
            sidebar.style.opacity = '0'; // Suaviza o desaparecimento
            setTimeout(() => {
                sidebar.classList.remove('active');
            }, 500); // Tempo igual à duração da transição
        } else {
            sidebar.classList.add('active');
            sidebar.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            sidebar.style.transform = 'translateX(0)'; // Transição para dentro da tela
            sidebar.style.opacity = '1'; // Suaviza a aparição
        }
    });
    
    // Função para esconder ou mostrar a navegação superior em telas pequenas com suavidade
    function checkWindowSize() {
        if (window.innerWidth <= 768) {
            topNavigation.style.transition = 'opacity 0.5s ease';
            topNavigation.style.opacity = '0'; // Suaviza o desaparecimento
            setTimeout(() => {
                topNavigation.style.display = 'none'; // Remove da tela após a transição
            }, 500); // Tempo igual à duração da transição
        } else {
            topNavigation.style.display = 'flex'; // Mostra a navegação
            topNavigation.style.transition = 'opacity 0.5s ease';
            topNavigation.style.opacity = '1'; // Suaviza a aparição
        }
    }
    
    // Verifica o tamanho da janela ao carregar a página
    checkWindowSize();
    
    // Verifica o tamanho da janela ao redimensionar
    window.addEventListener('resize', checkWindowSize);

    // Suaviza o comportamento de rolagem para âncoras
    document.querySelectorAll('.top-navigation a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de rolagem

            const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Suaviza a rolagem
                });
            }
        });
    });
});
