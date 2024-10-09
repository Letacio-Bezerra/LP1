function escolhaComputador() {
    const opcoes = ["Pikachu", "Squirtle", "Bulbasaur", "Charmander"];
    const indice = Math.floor(Math.random() * opcoes.length);
    return opcoes[indice];
}

function jogar(escolhaJogador) {
    const escolhaComp = escolhaComputador();
    let resultado = "";

    if (escolhaJogador === escolhaComp) {
        resultado = "Empate!";
        document.getElementById("resultado").style.color = "black";
    } else if (
        (escolhaJogador === "Pikachu" && escolhaComp === "Squirtle" || escolhaComp === "Bulbasaur") ||
        (escolhaJogador === "Charmander" && escolhaComp === "Bulbasaur" || escolhaComp === "Pikachu") ||
        (escolhaJogador === "Squirtle" && escolhaComp === "Charmander" || escolhaComp === "Pikachu") ||
        (escolhaJogador === "Bulbasaur" && escolhaComp === "Squirtle" || escolhaComp === "Charmander")
    ) {
        resultado = "Você ganhou!";
        document.getElementById("resultado").style.color = "green";
    } else {
        resultado = "Computador ganhou!";
        document.getElementById("resultado").style.color = "red";
        document.getElementById("gif").innerHTML = `<img src="" alt="">`
    }

    document.getElementById("resultado").innerText = "Você escolheu: " + escolhaJogador + ". Computador escolheu: " + escolhaComp + ". " + resultado;
}