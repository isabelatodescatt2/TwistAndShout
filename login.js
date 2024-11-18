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
      window.location.href = 'inicio.html';
  
      let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
      alert('Usuário ou senha incorretos');
      usuario.focus();
    }
  }
  
  function VoltarForm() {
    window.location.href = 'inicio.html';
}




    // Função chamada quando a API é carregada
    function onApiLoad() {
        console.log("API carregada com sucesso.");
        renderButton();  // Chama a função para renderizar o botão de login
    }

    // Função para renderizar o botão de login
    function renderButton() {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }

    // Função de sucesso (quando o login é bem-sucedido)
    function onSuccess(googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    }

    // Função de falha (quando ocorre algum erro)
    function onFailure(error) {
        console.log('Erro ao tentar fazer login: ', error);
    }
const campoLogin = document.getElementById('email').value
const campoSenha = document.getElementById('senha').value
const Entrar = document.getElementById('botao').value