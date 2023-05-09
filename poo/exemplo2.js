let pessoa = {
    nome:"carlos evandro",
    sobrenome:"chuu flores",
    anoNascimento:2021,
    cpf:12345678912
}

console.log(pessoa.nome.toUpperCase())
console.log(pessoa.nome+" tem "+(2023-pessoa.anoNascimento)+" anos")


// ou...
// let pessoa = {
//     nome:"carlos evandro",
//     sobrenome:"chuu flores",
//     anoNascimento:2021,
//     cpf:12345678912
//     mostrarIdade:function(){
//     console.log("sua idade é "+ (2023 - this.anoNascimento))
//}
// }
//
// pessoa.mostrarIdade();