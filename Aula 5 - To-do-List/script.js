function adicionar(){
    const personagens = ['Steven', 'Ametista', 'Pérola', 'Peridote']
    const novoPersonagem = document.getElementById("personagem").value

    // //Adiciona novo dado no final
    // personagens.push(novoPersonagem)

    // //Adiciona novo dado no começo
    // personagens.unshit(novoPersonagem)

    // //Remove o ultimo dado
    // personagens.pop()

    // //Remove o primeiro dado
    // personagens.shift()

    // //Atualizar Array
    // personagens[2] = 'Garnet'

    // console.log(personagens)

    personagens.forEach(function(pegaPersonagem){
        console.log(pegaPersonagem)
    })
}