//criar a promise dentro de uma função

function falarDepoisDe(segundos,frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase);
        },segundos*1000);
    });
}
//chamada de função
falarDepoisDe(4,"teste promise 2mib")
.then(frase=>frase.concat("programando em vscode"))
.then(novaFrase=>console.log(novaFrase))
