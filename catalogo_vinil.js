// funções da navbar
function Entrar(){
    window.location.href = "login.html";
}
function CarrinhoCompras(){
    window.location.href = "carrinho.html";
}

function exibirProdutosCategoria() {
    const categoria = "vinil"; // Define a categoria específica
    const produtos = JSON.parse(localStorage.getItem(categoria)) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    produtos.forEach(produto => { 
        const li = document.createElement('li'); 
        li.className = 'produto-card'; // Classe para estilização
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>Preço: R$${produto.preco}</p>
            </div>`;

            li.onclick = () => adicionarAoCarrinho(produto);

        lista.appendChild(li); 
    });
}

// Chame a função ao carregar a página
window.onload = exibirProdutosCategoria;

function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o produto ao carrinho
    carrinho.push(produto);

    // Salva o carrinho de volta no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produto.nome} foi adicionado ao carrinho!`);
}