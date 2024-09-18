/* Exemplo
let i = 0

while (i<10){
    alert(`${i} ice cream`)
    i+=2
}


alert("Fim do Loop")
*/



/*
function contagem(){
let numero = document.getElementById("numero").value
const resultado = document.getElementById("contagemNumero")

while (numero>0){
    alert(numero)
    numero--
}

alert("Fim da Contagem")
}
*/

function tabuada(){
    let numero = document.getElementById("tabuada").value
    let i = 1

    while (i<11){
        alert(`O número ${numero} x ${i} é igual a ${numero*i}`)
        i++
    }
    
    alert("Fim")
    }