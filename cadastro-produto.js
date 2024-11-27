function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    produtos.forEach((produto, index) => { 
        const li = document.createElement('li'); 
        li.className = 'produto-card'; 
        li.innerHTML = `
            <div class="produto-info">
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem" style="max-width: 50px;">
                <strong>${produto.nome}</strong> - R$${produto.preco}
            </div>
            <button onclick="excluirProduto(${index})" class="botao-excluir">x</button>
        `;
        lista.appendChild(li); 
    });
}

function criarProduto(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const preco = document.getElementById('preco').value.trim();
    const categoria = document.getElementById('categoria').value;
    const descricao = document.getElementById('descricaoProduto').value.trim();
    const imageURL = document.getElementById('imagePreview').src;

    if (nome && preco && categoria && descricao) {
        const produto = {
            nome,
            preco,
            categoria,
            descricao,
            imagem: imageURL
        };

        const produtosTotais = JSON.parse(localStorage.getItem('produtos')) || [];
        produtosTotais.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtosTotais));

        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('descricaoProduto').value = '';
    document.getElementById('imagePreview').src = 'imagens/uploadImage.png'; // Reseta a imagem
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result; // Define a imagem de pré-visualização
        }
        reader.readAsDataURL(file); // Lê o arquivo como URL
    }
}

function excluirProduto(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.splice(index, 1); // Remove o produto do array
    localStorage.setItem('produtos', JSON.stringify(produtos)); // Atualiza o localStorage
    exibirProdutos(); // Atualiza a exibição
}

// Exibir produtos ao carregar a página
window.onload = exibirProdutos;


// PARTE DE ENQUANTO TA DIGITANDO MUDAR A
const inputs = document.querySelectorAll('.meuInput');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    // Adiciona a classe "digitando" ao digitar
    input.classList.add('digitando');
  });