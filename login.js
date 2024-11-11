function login() {
    // Obtém os elementos dos campos do formulário de login usando os IDs atualizados
    let campoEmailLogin = document.getElementById('email'); // Campo para nome de usuário
    let campoSenhaLogin = document.getElementById('senha'); // Campo para senha
    

    // Obtém os valores digitados pelo usuário
    let emailLogin = campoEmailLogin.value;
    let senhaLogin = campoSenhaLogin.value;


    // Obtém os dados armazenados no Local Storage ou usa um objeto vazio se não houver dados
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    // Adiciona o novo login ao banco de dados
    bancoDeDados[emailLogin] = { usuario: emailLogin, password: senhaLogin };


    // Verifica se o nome de usuário e a senha correspondem a algum registro no banco de dados
    if (bancoDeDados[emailLogin] && bancoDeDados[emailLogin].password === senhaLogin) {

        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        // window.location.href = "index.html";  ----  ainda não tem essa página

    } else {

        alert("Email ou senha incorretos."); // Exibe mensagem se o login falhar

    }
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