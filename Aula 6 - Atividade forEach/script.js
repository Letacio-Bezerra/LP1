function pares(){
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    let numerosPares = [];

    numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
    });

    alert(numerosPares); // [2, 4, 6, 8]
}

function nomes(){
    let nomes = ["João", "Maria", "Carlos", "Ana"];
    let nomesComPrefixo = [];
    
    nomes.forEach(function(nome) {
      nomesComPrefixo.push("Sr(a). " + nome);
    });
    
    alert(nomesComPrefixo); 
}

function maiorDez(){
    let numerosDez = [4, 11, 8, 15, 23, 7, 2];
    let numerosMaiorDez = [];
    
    numerosDez.forEach(function(numeroDez) {
        if (numeroDez > 10){
            numerosMaiorDez.push(numeroDez);
        }
    });
    
    alert(numerosMaiorDez);
}

function nomesM(){
    let nomesMin = ["ana", "carlos", "maria"];
    let nomesMax = [];
    
    nomesMin.forEach(function(nomeM) {
        nomesMax.push(nomeM.toUpperCase());
    });
    
    alert(nomesMax);
}

function separar(){
    let frase = "Memphis Depay é Brabo";
    let palavras = frase.split(" ");
    let contagemPalavras = 0;
    
    palavras.forEach(function() {
      contagemPalavras++;
    });

    alert(contagemPalavras);
}