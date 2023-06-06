const leia = require("prompt-sync")()

// leia o nome do usuario
// ler o salario dele
// se o salario for menor 2500 ela e isenta
// se for acima de 2500 e menor igual a 500 paga 15% de imposto - mostra imposto e salario liquido
// se for acima de 5000 o salaiopaga imposto de 25% mostra o salario liquido e imposto a pagar

let usuario
let salario

usuario = leia("digite o nome do usuario: ")
salario = parseFloat(leia("digite o valor do salario: "))

if(salario<=2500){
    console.log(usuario+", voce é isento.")
}

else if(salario>2500 && salario<=5000){
    valorImposto = salario*0.15
    console.log(usuario+", seu imposto é "+valorImposto)
    console.log("seu salario liquido é "+(salario-valorImposto))
}

else{
    valorImposto = salario*0.25
    console.log(usuario+", seu imposto é "+valorImposto)
    console.log("seu salario liquido é "+(salario-valorImposto))
}

console.log("fim do programa")