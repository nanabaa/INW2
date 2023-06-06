// pedir nome i ano di nasciemnto
// se a idade for menor igual q 3 - nao atendemos bebes
// se for maiorq 3 e menos q 13 - faixa infantil
// se for maior q 13 menor q 17 - faixa adolescente
// se for maior q 17 menor q 65 - faixa adulto
// maiorq 65 - nao atendemos idosos



const leia = require("prompt-sync")()
let usuario

let anoNascimento

usuario = leia("digite seu nome: ")
anoNascimento = parseFloat(leia("digite seu ano de nascimento: "))

let idade = (2023-anoNascimento)

if(idade<=3){
    console.log("nao atendemos bebes")
}

else if(idade<=13){
    console.log("faixa infantil")
}

else if(idade<=17){
    console.log("faixa adolescente")
}

else if(idade<=65){
    console.log("faixa adulto")
}

else{
    console.log("nao atendemos idosos")
}

console.log("fim do programa")