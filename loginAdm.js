function loginAdm() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    console.log(`Usuário: ${usuario}, Senha: ${senha}`); // Para depuração

    if (usuario === 'senninhaadm' && senha === 'senninhaadm') {
        window.location.href = 'cadastro-produto.html'; 
    } else {
        alert('Credenciais erradas. Tente novamente!');
    }
}

function loginCliente() {
    window.location.href = 'login.html'; 
}