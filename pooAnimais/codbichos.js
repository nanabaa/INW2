class Animal {
    constructor(especie,peso,porte,anoNascimento){
    this.especie = especie;
    this.peso = peso;
    this.porte = porte;
    this.anoNascimento = anoNascimento
    }

    fazBarulho(){
     console.log("fazendo barulho...")
    }

    voltaIdade(){
        return (2023-this.anoNascimento)
    }
}

class Gato extends Animal{
    constructor(especie, cor, raca){
        super(especie);
        this.cor = cor;
        this.raca = raca
    }

    miar(){
        console.log("NYAAAAAAA")
    }
}

//programa principal

let bicho1 = new Animal("Tigre",200,"Grande",2000)
let bicho2 = new Animal("Galinha",2,"Pequeno",2022)
let bicho3 = new Gato("Felino","Preto","Persa")


console.log(bicho1.especie)
bicho1.fazBarulho()
console.log(bicho1.voltaIdade(2023))
console.log(bicho3.especie)
bicho3.fazBarulho()
bicho3.miar()
bicho3.anoNascimento = 2000
console.log(bicho3.voltaIdade(2023))

