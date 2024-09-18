/*
let numero;

do {
    numero = parseFloat(prompt('Digite um número:'))
    if (numero < 10){
        alert('Número inválido')
    }
}
while (numero < 10)

alert('Passou!')
*/

let numero, nome, salario, genero, estadoCivil;

do {
    numero = parseFloat(prompt('Digite sua idade:'))
    if (isNaN(numero)){
        alert('Digite um valor válido')
    }
    else if (numero > 150 || numero < 0){
        alert('Número inválido')
    }
}
while (numero < 0 || numero > 150 || isNaN(numero))

do{
    prompt('Nome:')
    //null - texto vazio
    //NaN - quando eu converto antes de verificar
    if(nome == null){
        alert("Valor invalido")
    }
    if(nome.length < 3){
        alert('Seu nome é curto')
    }
}
while(nome.length < 3 || nome == null)

do {
    salario = parseFloat(prompt('Salario:'))
    if (isNaN(salario)){
        alert('Digite um valor válido')
    }
    else if (salario < 0){
        alert('Número inválido')
    }
}
while (salario < 0)

do{
    genero = prompt('Genero:')
    genero = genero.toLocaleLowerCase();
    //null - texto vazio
    //NaN - quando eu converto antes de verificar
    if(genero == null){
        alert("Valor invalido")
    }
    if(genero != "f" && genero != "m"){
        alert('Seu nome é curto')
    }
}
while(genero != "f" || genero != "m")