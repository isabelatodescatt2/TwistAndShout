document.addEventListener("DOMContentLoaded", () => {
    const btnCadastro = document.getElementById("btnCadastro");
    const token = localStorage.getItem("token");
    const userLogado = localStorage.getItem("userLogado");

    // Esconde o botão de cadastro se o usuário estiver logado
    if (token && userLogado) {
        btnCadastro.style.display = "none";
    }
});

function Entrar() {
    window.location.href = "login.html";
}

function Inicio() {
    window.location.href = "index.html";
}

function VoltarForm() {
    window.location.href = "index.html";
}