let aviao = {
    empresa:"Latam",
    modelo:"Airbus A320",
    quantPassageiros:"200",
    ligado:false,
    velocidade:0,
    velocidadeMax:800,
    ligar: function(){
    this.ligado = true
     console.log ("avião ligado..")
    } , 
    desligar: function(){
    this.ligado = false
    console.log ("avião desligado..")
    },
    decolar:function(){
        if(this.ligado & this.velocidade == 200){
        console.log("decolando....")}
    },
    pousar:function(){
        if(this.ligado & this.velocidade ==200){
        console.log("pousando....")}
    },
    acelerar:function(){
        console.log("velocidade atual: "+this.velocidade)
        if(this.ligado && this.velocidade<this.velocidadeMax){
            this.velocidade = this.velocidade + 10
        }
        console.log("acelerando...")  
    },
    desacelerar: function(){

        console.log("velocidade atual " + this.velocidade)
        if(this.ligado && this.velocidade>0){
        this.velocidade= this.velocidade - 10}
        console.log("Desacelerando..")
        }
}

aviao.ligar();
for(let x=1;x<=20; x++){
aviao.acelerar();
console.log("velocidade atual: "+aviao.velocidade)
}

aviao.decolar();
for(let x=1;x<=60; x++){
    aviao.acelerar();
    console.log("velocidade atual: "+aviao.velocidade)
    }

for(let x=1;x<=60; x++){
aviao.desacelerar();
console.log("velocidade atual : " + aviao.velocidade)
}

aviao.pousar();
for(let x=1;x<=20; x++){
aviao.desacelerar();
 console.log("velocidade atual : " + aviao.velocidade)
}

aviao.desligar();
