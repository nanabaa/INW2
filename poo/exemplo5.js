class Retangulo{
    constructor(altura,base){
        this.altura=altura;
        this.base=base;
    }

    mostrarArea(){
        console.log("a area do retangulo é: "+(this.altura*this.base))
        }
}

const leia=require('prompt-sync')()
let base1=leia("digite a base 1:")
let altura1=leia("digite a altura 1:")
let base2=leia("digite a base 2:")
let altura2=leia("digite a altura 2:")

let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)

console.log("base do objeto 1:"+objeto1.base)
console.log("area do objeto 1: "+(objeto1.base*objeto1.altura))

objeto2.mostrarArea()
objeto1.mostrarArea()