class conta{
    constructor(numero,saldo,ativa){
        this.numero = numero;
        this.saldo = saldo;
        this.ativa = ativa
    }

    credito(valor){
        this.saldo = this.saldo+valor
    }

    debito(valor){
        if(valor<0){
            console.log("Impossivel fazer. Numero negativo.")
        }
        else if(this.saldo<valor){
            console.log("Impossivel realizar. Saldo indisponivel.")
        }
        else{
            this.saldo = this.saldo-valor
        }
    }
}

let conta1 = new conta(15,0,true)

console.log("Saldo atual da conta: "+conta1.saldo)
conta1.credito(100)
console.log("Saldo atual da conta: "+conta1.saldo)
conta1.debito(50)
console.log("Saldo atual da conta: "+conta1.saldo)
conta1.debito(60)
console.log("Saldo atual da conta: "+conta1.saldo)


