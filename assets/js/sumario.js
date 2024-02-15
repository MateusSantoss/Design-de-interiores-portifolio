// Captura todos os links dos projetos
var projectLinks = document.querySelectorAll('.link-do-projeto');

// Adiciona evento de clique a cada link do projeto
projectLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        var targetId = this.getAttribute('href'); // Obtém o ID do projeto alvo
        var targetElement = document.querySelector(targetId); // Encontra o elemento alvo

        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});