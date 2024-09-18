function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;

    if (nome === "" || email === "" || senha === "" || confirmaSenha === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
    } else if (senha !== confirmaSenha) {
        alert("A senha e a confirmação de senha não coincidem.");
    } else {
        alert("Formulário enviado com sucesso.");
    }
}