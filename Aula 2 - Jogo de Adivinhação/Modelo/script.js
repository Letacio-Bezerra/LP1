function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar(){
    const numero = gerarAleatorio()
    let palpite = ""

    alert(numero)
    do{
        palpite = parseInt(prompt('Adivinhe o número:'))
        if (palpite != numero){
            alert("Errou")
        }
        else{
            alert(`Acertou, o número era: ${numero}`)
            return
        }
    }
    while (palpite != numero)
}

jogar()