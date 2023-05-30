class produtosPraia{
    constructor(id,descricao,ativo,estoque,preco,cor,tamanho){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.cor = cor;
        this.tamanho = tamanho
    }

    ativar(){
        this.ativo = true;
    }

    retirarEstoque(quantidade){
        if(this.ativo){
            if(quantidade<0){
            console.log("impossivel realizar a ação. estoque vazio.")
            }
            else if(quantidade==0){				
            console.log("Impossivel realizar. estoque vazio...")			
            }	
            else if(this.estoque<quantidade){
                console.log("impossível realizar. quantidade indisponivel")
            }			
            else {				
            this.estoque -= quantidade
            console.log("valor total: "+(quantidade*this.preco))				
            }				
        }				
        else {				
        console.log("Inativo....")				
        }
    }

    colocarEstoque(quantidade){
        if(this.ativo){
            if(quantidade<0){
            console.log("impossivel realizar a ação.")
            }
            else if(quantidade==0){				
            console.log("Impossivel realizar a açao.")			
            }		
            else if(quantidade>10){
            console.log("Impossivel realizar. quantidade excedida...")
            }
            else {				
            this.estoque += quantidade				
            }				
        }				
        else {				
        console.log("Inativo....")				
        }
    }
}

const leia = require("prompt-sync")()
console.log("Cool Beach")
console.log("Bem vindo, sinta-se na praia")
continuar=leia("Deseja continuar? S/N ")
if(continuar=="N" || continuar=="n"){
    console.log("até breve!")
}
else{
    console.log("Cool Beach")
    console.log("Bem vindo, sinta-se na praia")
    console.log("Cadastro inicial do produto...")

    let id = parseInt(leia("código do produto:"))
    let descricao = leia("descriçao do produto:")
    let preco = parseFloat(leia("valor do produto:"))
    let cor = leia("cor do produto:")
    let tamanho = parseInt(leia("tamanho do produto:"))
    let p1 = new produtosPraia(id,descricao,true,10,preco,cor,tamanho)
    console.log("produto cadastrado com sucesso.")
    let quantidade = 0

    for(let x=1;x<=5;x++){
            console.log("venda: "+x)
            console.log("produto: "+p1.id)
            console.log("estoque atual: "+p1.estoque)
            
            quantidade = parseInt(leia("quantidade do produto que deseja retirar: "))
            p1.retirarEstoque(quantidade)
        }
    quantidade = parseInt(leia("quantidade do produto que deseja colocar: "))
    p1.colocarEstoque(quantidade)
    console.log("estoque atual: "+p1.estoque)
}



