let username = document.querySelector('#username');
let emailOrPhone = document.querySelector('#emailoutelefone');
let password = document.querySelector('#senha');
let confirmPassword = document.querySelector('#confirmarsenha');
let msgError = document.createElement('div');
let msgSuccess = document.createElement('div');
document.body.appendChild(msgError);
document.body.appendChild(msgSuccess);

let validUsername = false;
let validPassword = false;
let validConfirmPassword = false;

// Validação do username
username.addEventListener('keyup', () => {
  if (username.value.length <= 4) {
    username.style.borderColor = 'red';
    validUsername = false;
  } else {
    username.style.borderColor = 'green';
    validUsername = true;
  }
});

// Validação da senha
password.addEventListener('keyup', () => {
  if (password.value.length <= 5) {
    password.style.borderColor = 'red';
    validPassword = false;
  } else {
    password.style.borderColor = 'green';
    validPassword = true;
  }
});

// Validação de confirmação da senha
confirmPassword.addEventListener('keyup', () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.style.borderColor = 'red';
    validConfirmPassword = false;
  } else {
    confirmPassword.style.borderColor = 'green';
    validConfirmPassword = true;
  }
});

// Função de cadastro
function cadastro() {
  if (validUsername && validPassword && validConfirmPassword) {
    let userList = JSON.parse(localStorage.getItem('userList') || '[]');

    userList.push({
      username: username.value,
      emailOrPhone: emailOrPhone.value,
      password: password.value,
    });

    localStorage.setItem('userList', JSON.stringify(userList));

    setTimeout(() => {
      window.location.href = 'login.html'; // Alterar para o destino desejado
    }, 3000);
  } else {
    alert('Preencha todos os campos corretamente antes de cadastrar');

  }
}


function AbrirEntrar() {
    window.location.href = 'login.html';
}


function VoltarForm() {
    window.location.href = 'inicio.html';
}


const modal = document.getElementById('janelinha-modal')

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