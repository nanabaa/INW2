class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf= cpf;
        this.nome= nome;
        this.anoNascimento=anoNascimento
    }
    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

class Cliente extends Pessoa{
    constructor(cpf,id){
        super(cpf);
        this.id=id
    }
    
    mostrarNome(){
        console.log("O nome é"+this.nome)
    }
}

let cliente1=new Pessoa("111.222.333-44","carlos",1994)
console.log(cliente1)
console.log(cliente1.nome)
console.log(cliente1.cpf)
cliente1.mostrarIdade();
console.log(cliente1.id)

let cliente2=new Cliente("111.222.333-45",1)
cliente2.anoNascimento=2000
cliente2.nome="epaminondas"
console.log(cliente2)
console.log(cliente2.cpf)
cliente2.mostrarIdade();
console.log(cliente2.id)
cliente2.mostrarIdade()
cliente2.mostrarNome()

