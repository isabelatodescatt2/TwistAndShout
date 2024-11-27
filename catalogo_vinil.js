// funções da navbar
function Entrar() {
    window.location.href = "login.html";
}

function CarrinhoCompras() {
    window.location.href = "carrinho.html";
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, exibindo produtos da categoria...');
    exibirProdutosCategoria();
});

function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

function exibirProdutosCategoria() {
    const categoria = "vinil"; 
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);

    if (produtosFiltrados.length > 0) {
        produtosFiltrados.forEach(produto => { 
            const precoFormatado = parseFloat(produto.preco).toFixed(2);
            const li = document.createElement('li'); 
            li.className = 'produto-card';
            li.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$${precoFormatado}</p>
                    <img src="imagens/adicionarCart.png" class="btn-adicionar" onclick='adicionarAoCarrinho(${JSON.stringify(produto)})'>
                </div>`;
            lista.appendChild(li); 
        });
    } else {
        lista.innerHTML = '<p>Nenhum produto encontrado nesta categoria.</p>';
    }
}