let produtoEditandoIndex = null;

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    produtos.forEach((produto, index) => { 
        const li = document.createElement('li'); 
        li.className = 'produto-card'; 
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>Preço: R$${produto.preco}</p>
                <div class="btn-container">
                    <button class="btn-excluir" onclick="excluirProduto(${index})">x   </button>
                    <button class="btn-editar" onclick="editarProduto(${index})">✎   </button>
                </div>
            </div>`;
        lista.appendChild(li); 
    });
}

function excluirProduto(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.splice(index, 1); // Remove o produto do array
    localStorage.setItem('produtos', JSON.stringify(produtos)); // Atualiza o localStorage
    exibirProdutos(); // Atualiza a exibição
}

function editarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produto = produtos[index];

    // Preenche o formulário com os dados do produto
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('categoria').value = produto.categoria;
    document.getElementById('descricaoProduto').value = produto.descricao;
    document.getElementById('imagePreview').src = produto.imagem;

    produtoEditandoIndex = index; // Armazena o índice do produto que está sendo editado
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
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
            imagem: imageURL
        };

        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        
        if (produtoEditandoIndex !== null) {
            // Atualiza o produto existente
            produtos[produtoEditandoIndex] = produto;
            produtoEditandoIndex = null; // Reseta o índice após a atualização
        } else {
            // Adiciona um novo produto
            produtos.push(produto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
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

function Menu() {
    let modal = document.getElementById('modal-menu');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-modal-menu' || e.target.id == 'modal-menu') {
            modal.classList.remove('abrir');
        }
    });
}

function Editor() {
    window.location.href = "edicao.html";
}

function CLIENT() {
    window.location.href = "";
}

function Entrar() {
    window.location.href = "login.html";
}

function Inicio() {
    window.location.href = "index.html"; // Redireciona para a página inicial
}