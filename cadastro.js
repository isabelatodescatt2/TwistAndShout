function cadastro() {
    // Buscas os inputs do cadastro pelo seu ID e armazena os valores digitados pelo usuário nos inputs
    let usuario = document.getElementById('username').value;
    let email = document.getElementById('emailoutelefone').value;
    let senha = document.getElementById('senha').value;
    let confirmaSenha = document.getElementById('confirmarsenha').value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha === confirmaSenha) {

        // Obtém os dados armazenados no Local Storage ou cria um objeto vazio se não houver dados
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

        // Verifica se o nome de usuário já está cadastrado
        if (bancoDeDados[usuario] || bancoDeDados[email]) {
            alert("usuário ou email já cadastrados.") // Exibe mensagem se o nome de usuário já existir
            return; // Encerra a função para não cadastrar o usuário
        } 



        // Adiciona o novo usuário ao banco de dados
        bancoDeDados[usuario] = { usuario: usuario, password: senha };

        // Salva o banco de dados atualizado no Local Storage
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert("Usuário cadastrado com sucesso!"); // Exibe mensagem de sucesso
    } else {
        alert("As senhas são diferentes!"); // Exibe mensagem se as senhas não coincidirem
    }
}


function VoltarForm(){
    window.location.href='AQUI É O LINK DA PAGINA PRINCIPAL'
}


const modal = document.getElementById('janelinha-modal')
// Seleciona o elemento modal pelo ID da minha 'janelinha-modal' e armazena na const 'modal'

// Abre o meu modal
function abrirModal() {

    // Qnd essa função for chamada ela vai definir a propriedade do 'display' do modal para 'flex'
    // Isso vai fazer com que o modal apareça na tela, pq então o 'display: none' vai deixá-lo invisível
    modal.style.display = "flex"
}

// Função pra fechar o modal
function fecharModal() {

    // Quando for chamada ela vai definir a propriedade 'display' do modal para 'none', como tava antes
    modal.style.display = "none"
}