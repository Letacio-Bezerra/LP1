

function cardapio(){
    const resultado = document.getElementById("resultado")
    let escolhaCardapio = document.getElementById("opcoes").value;

    switch(escolhaCardapio){
        case "cafe":
            resultado.innerHTML = `<h1>O café é:</h1>
            <ul>
            <li>Pão com manteiga</li>
            </ul>`
        break;
        case "almoco":
            resultado.innerText = "Sal"
        break;
        case "jantar":
            resultado.innerText = "Lingua"
        break;
        default:
            resultado.innerText = "Opção Invalida"
    }
}