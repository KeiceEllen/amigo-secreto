// Cria um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função chamada ao clicar em "Adicionar"
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços extras

    // Validação: campo vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de entrada e foca nele novamente
    input.value = '';
    input.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de recriar

    // Percorre o array e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    // Gera índice aleatório entre 0 e (amigos.length - 1)
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
