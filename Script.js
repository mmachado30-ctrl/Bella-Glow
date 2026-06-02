# Bella-Glow
// Seleciona os elementos do HTML pelo ID
const botao = document.getElementById('botaoInterativo');
const mensagem = document.getElementById('mensagemOculta');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', () => {
    // Alterna a classe 'hidden' (esconder/mostrar)
    mensagem.classList.toggle('hidden');
    
    // Altera o texto do botão dependendo do estado da mensagem
    if (mensagem.classList.contains('hidden')) {
        botao.textContent = 'Clique Aqui';
    } else {
        botao.textContent = 'Esconder Mensagem';
    }
});
