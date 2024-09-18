function diaHoje(){
    const resultado = document.getElementById("resultado")
    let diaSemana = document.getElementById("dias").value

    switch(diaSemana){
        case "segunda":
            resultado.innerText = "Hoje é Segunda-Feira"
        break;

        case "terca":
            resultado.innerText = "Hoje não é Terça-Feira"
        break;

        case "quarta":
            resultado.innerText = "Hoje não é Quarta-Feira"
        break;

        case "quinta":
            resultado.innerText = "Hoje não é Quinta-Feira"
        break;

        case "sexta":
            resultado.innerText = "Hoje não é Sexta-Feira"
        break;

        case "sabado":
            resultado.innerText = "Hoje não é Sábado"
        break;

        case "domingo":
            resultado.innerText = "Hoje não é Domingo"
        break;
        default:
            resultado.innerText = "Opção Invalida"
    }
}


