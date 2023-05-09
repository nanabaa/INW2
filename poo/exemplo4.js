const leia = require('prompt-sync')()

let altura1 = leia("digite a altura 1:")
let base1 = leia("digite a base 1:")
let area1 

let altura2 = leia("digite a altura 2:")
let base2 = leia("digite a base 2:")
let area2 


area1 = base1*altura1
area2 = base2*altura2

console.log("a area do retangulo é:" +area1)
console.log("a area do retangulo 2 é:" +area2)