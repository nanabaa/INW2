const leia = require("prompt-sync")()

let numero = 0
let contador = -1
let total = 0
let maiorNumero = 0

do{
    total = total + numero
    if(numero>maiorNumero){
        maiorNumero = numero
    }
    contador++
    numero = parseInt(leia("digite um numero: "))  
} while(numero>0)
console.log("total: "+total)
console.log("maior numero: "+maiorNumero)
console.log("quantidade de numeros: "+contador)