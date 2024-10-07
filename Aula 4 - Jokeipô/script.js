function escolhaOponente(){
    const jokeipo = ["pedra", "papel", "tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]
}

function escolhaJogador(botaoClicado){
    return botaoClicado;
}

function jogar(escolhaUser){
    const jogadaPC = escolhaOponente()
    const escolhaUsuario = escolhaJogador(escolhaUser)

    if(jogadaPC === escolhaUsuario){
        alert("Empate!")
    }
    else if(
        (jogadaPC === "Pedra" && escolhaUsuario === "Papel") ||
        (jogadaPC === "Papel" && escolhaUsuario === "Tesoura") ||
        (jogadaPC === "Tesoura" && escolhaUsuario === "Pedra")
    ){
        alert("Ganhou")
    }
    else{
        alert("Perdeu")
    }
}

escolhaJogador()