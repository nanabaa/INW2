function escreverNoConsole(){
    console.log("escrevendo no console");
}
escreverNoConsole();

const textoNoConsole=function(){
    console.log("segundo exemplo");
}
textoNoConsole();

const textoPorParametro=function(texto){
    console.log(texto)
}
textoPorParametro("terceiro exemplo, esse texto é o parametro");

const textoUsandoArrow=texto=>console.log(texto)
textoUsandoArrow("quarto exemplo, usando arrow function")

//funcao arrow q recebe um numero e mostra na tela o numero e diz se eh par ou impar, negativo ou zerado

const mostrarParImpar = (numero) => {
    if(numero < 0){
        console.log(numero," o numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero," o numero digitado é neutro")
    }
    else if ((numero%2)==0){
        console.log(numero," o numero digitado é par")
    }
    else
    {
        console.log(numero," o numero digitado é impar")
    }
}
mostrarParImpar(13)

function escreveLinha(tamanho=80){
    let linha
    for(let x=1; x<=tamanho; x++){
        linha=linha+"-"
    }
    console.log(linha)
}
escreveLinha(80)

