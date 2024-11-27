let produtoEditandoIndex = null;

// Função para exibir produtos cadastrados
function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';

    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - ${produto.preco} - ${produto.categoria} - ${produto.descricao}`;
        lista.appendChild(li);
    });
}

// Função para cadastrar ou editar produtos
function criarProduto(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const preco = document.getElementById('preco').value.trim();
    const categoria = document.getElementById('categoria').value;
    const descricao = document.getElementById('descricaoProduto').value.trim();

    if (nome && preco && categoria && descricao) {
        const produto = { nome, preco, categoria, descricao };

        const produtosTotais = JSON.parse(localStorage.getItem('produtos')) || [];

        if (produtoEditandoIndex !== null) {
            produtosTotais[produtoEditandoIndex] = produto;
            produtoEditandoIndex = null;
        } else {
            produtosTotais.push(produto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtosTotais));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('descricaoProduto').value = '';
}

// Função para limpar todos os produtos do Local Storage
function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

// Função para buscar produtos
function buscarProdutos() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const resultadosDiv = document.getElementById('resultados');
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    resultadosDiv.innerHTML = '';
    resultadosDiv.style.display = 'none';

    if (termo.trim() === '') {
        alert('Por favor, insira algo para buscar.');
        return;
    }

    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo) ||
        produto.categoria.toLowerCase().includes(termo) ||
        produto.descricao.toLowerCase().includes(termo)
    );

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    } else {
        resultados.forEach(produto => {
            const p = document.createElement('p');
            p.textContent = `Nome: ${produto.nome} | Preço: ${produto.preco} | Categoria: ${produto.categoria} | Descrição: ${produto.descricao}`;
            resultadosDiv.appendChild(p);
        });
    }

    resultadosDiv.style.display = 'block';
}

// Eventos
document.getElementById('buscarBtn').addEventListener('click', buscarProdutos);
document.addEventListener('DOMContentLoaded', exibirProdutos);
