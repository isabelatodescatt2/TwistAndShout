// NAV BAR
function Entrar() {
    window.location.href = "login.html";
}



function CarrinhoCompras() {
    // Verifica se a chave 'carrinho' existe e se tem produtos
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Se o carrinho for null ou não tiver produtos, redireciona para carrinhoVazio.html
    if (!carrinho || carrinho.length === 0) {
        window.location.href = 'carrinhoVazio.html';
    } else {
        // Caso contrário, redireciona para carrinho.html
        window.location.href = 'carrinho.html';
    }
}


