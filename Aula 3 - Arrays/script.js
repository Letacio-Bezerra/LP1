// const nomes = ['Caio', 'Ana', 'Julia', 'Pedro']
// console.log(nomes[0])

// function gerarAleatorio(){
//     const numeroAleatorio = Math.floor(Math.random() * 4)
//     return numeroAleatorio
// }

// function sortearNome(){
//     let numeroSorteado = gerarAleatorio()
//     console.log(nomes[numeroSorteado])
// }



const numero = [788, 46564, 32, 6]

function gerarNumero(){//lenght fala que é igual a quantidade do array e não um numero fixo como 4 que seria pro tamanho desse array
    const numeroA = Math.floor(Math.random() * numero.length)
    return numeroA
}

function seuNumero(){
    let seuNumero = gerarNumero()
    alert(numero[seuNumero])
}