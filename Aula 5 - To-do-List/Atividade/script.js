function calcular(){
    const multiplo = ['2', '4', '6', '8']
    const base = document.getElementById("base").value

    multiplo.forEach(function(pegaPersonagem){
        console.log(pegaPersonagem*base)
    })
}