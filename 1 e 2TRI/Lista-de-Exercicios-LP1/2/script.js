function tema(){
    let tema = document.getElementById("tema").value;
    let body = document.body;
    let h1 = document.querySelector("#aulaTema h1");

    switch(tema){
        case "claro":
            body.style.backgroundColor = "#FFFFFF";
            h1.style.color = "#000000";
            break;

        case "escuro":
            body.style.backgroundColor = "#000000";
            h1.style.color = "#FFFFFF";
            break;
        default:
            resultado.innerText = "Opção Invalida"
    }
}