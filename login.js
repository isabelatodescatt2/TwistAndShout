// Função para realizar o login
function login() {
    let usuario = document.querySelector('#email');
    let senha = document.querySelector('#senha');
  
    let listaUser = JSON.parse(localStorage.getItem('userList')) || [];
    let userValid = null;
  
    listaUser.forEach((item) => {
      if (usuario.value === item.emailOrPhone && senha.value === item.password) {
        userValid = item;
      }
    });
  
    if (userValid) {
      window.location.href = 'index.html';
  
      let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
      alert('Usuário ou senha incorretos');
      usuario.focus();
    }
  }
  
  function VoltarForm() {
    window.location.href = 'index.html';
}


const campoLogin = document.getElementById('email').value
const campoSenha = document.getElementById('senha').value
const Entrar = document.getElementById('botao').value

function loginAdmin() {
  window.location.href = 'loginAdm.html';
}