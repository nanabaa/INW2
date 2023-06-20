const leia = require("prompt-sync");

class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }
    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

class Aluno extends Pessoa{
    constructor(cpf,nome,anoNascimento,matricula,nota){
        super(cpf,nome,anoNascimento);
        this.matricula = matricula;
        this.nota = nota
    }
}


let p1 = new Aluno("111.222.333-44","marcos",2008,"mat01",0)
let p2 = new Aluno("222.333.444-55","maria",2007,"mat02",10)
let p3 = new Aluno("333.444.555-66","pedro",2007,"mat02",5)
let p4 = new Aluno("333.444.666-77","paulo",2006,"mat01",2)

console.log("Mat\tAluno\tNota")
console.log("-----------------------------------------------")
console.log(p1.matricula+'t'+p1.nome+'t'+p1.nota)
console.log(p2.matricula+'t'+p2.nome+'t'+p2.nota)
console.log(p3.matricula+'t'+p3.nome+'t'+p3.nota)
console.log(p4.matricula+'t'+p4.nome+'t'+p4.nota)
console.log("-----------------------------------------------")

console.log("digite as notas")
console.log(p1.nome)
p1.nota = parseInt(leia("digite a nota do aluno: "))
console.log(p2.nome)
p2.nota = parseInt(leia("digite a nota do aluno: "))
console.log(p3.nome)
p3.nota = parseInt(leia("digite a nota do aluno: "))
console.log(p4.nome)
p4.nota = parseInt(leia("digite a nota do aluno: "))

console.log("Mat\tAluno\tNota")
console.log("-----------------------------------------------")
console.log(p1.matricula+'t'+p1.nome+'t'+p1.nota)
console.log(p2.matricula+'t'+p2.nome+'t'+p2.nota)
console.log(p3.matricula+'t'+p3.nome+'t'+p3.nota)
console.log(p4.matricula+'t'+p4.nome+'t'+p4.nota)
console.log("-----------------------------------------------")

console.log("\t")