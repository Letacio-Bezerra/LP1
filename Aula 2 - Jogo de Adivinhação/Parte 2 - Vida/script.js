function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 11)
    return numeroAleatorio
}

function jogar(){
    const numero = gerarAleatorio()
    let vida = 3
    let palpite = ""

    alert(numero)
    do{
        palpite = parseInt(prompt('Adivinhe o número:'))
        if (palpite != numero){
            vida--
            alert(`Errou, tentativas restantes ${vida}`)
        }
        else{
            alert(`Acertou, o número era: ${numero} e vidas restantes é ${vida}`)
            return
        }
    }
    while (vida > 0)
}

jogar()