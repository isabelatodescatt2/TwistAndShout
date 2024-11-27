function Inicio() {
    window.location.href = "index.html"; // Redireciona para a página inicial
}

function Entrar() {
    window.location.href = "login.html"; // Redireciona para a página de login
}

function exibirProdutosCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    carrinho.forEach(produto => { 
        const li = document.createElement('li'); 
        li.className = 'produto-card';
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="disco">Disco de Vinil</p>
                <p class="preco">R$ ${produto.preco}</p>
            </div>
            <div class="quantidade">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
        `;
        lista.appendChild(li); 
    });

    calcularTotal(); // Chama a função para calcular o total
}

function calcularTotal() {
    let total = 0;
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Obtém os produtos do Local Storage

    carrinho.forEach(produto => {
        total += parseFloat(produto.preco); // Converte o preço para número e soma
    });

    document.getElementById("total").textContent = total.toFixed(2); // Atualiza o total no HTML
}

// Exibir produtos quando a página carregar
window.onload = exibirProdutosCarrinho;

// Eventos para o modal
document.getElementById("finalizarCompra").addEventListener("click", () => {
    document.getElementById("modalFinalizarCompra").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modalFinalizarCompra").style.display = "none";
});

document.getElementById("btnFecharModal").addEventListener("click", () => {
    document.getElementById("modalFinalizarCompra").style.display = "none";
});


// Função para fechar o modal
function finalizarCompra() {
    alert("Sua compra foi realizada com sucesso!");

    localStorage.removeItem('carrinho'); // Remove todos os produtos do Local Storage
    exibirProdutosCarrinho(); // Chama a função para exibir os produtos do carrinho novamente
}