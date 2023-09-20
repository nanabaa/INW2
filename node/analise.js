const notas = (nome,ac=5,at)=>{
    if(at===undefined){
        console.log(`${nome} procure a supervisão voce esta de RECUPERAÇÃO`)
    }
    else if(((ac+at)/2)<=6){
        console.log(`${nome} sua media é ${((ac+at)/2)} voce esta de recuperaçao`)

    } 
    else{
        console.log(`${nome} sua media é ${((ac+at)/2)} voce esta aprovado!`)
    }
} 

notas("Neymar",6,8)