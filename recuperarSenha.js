function enviarEmail() {
    const contato = document.getElementById("contato").value.trim();

    if (!contato) {
        alert("Por favor, preencha o campo de contato.");
        return;
    }

    alert("Email enviado com sucesso!");
}

