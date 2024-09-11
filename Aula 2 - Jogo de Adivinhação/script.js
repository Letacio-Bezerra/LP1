function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar(){
    const pegaNumeroAleatorio = gerarNumeroAleatorio()
    console.log(pegaNumeroAleatorio)
}

jogar()


function confirmar(){
    let chute = parseInt(document.getElementById("chute").value)
    do
    {
        if(chute === ""){
            alert("O campo não pode estar vazio")
        }
        else if(chute != jogar()){
            alert("Errou")
        }
    }
    while (chute != jogar())
    alert("Acertou")
}