const calculaImposto = (salario) => {
    if(salario < 1500){
        return 0;
    } else if(salario > 1500 && salario < 2500){
        return salario * 0.15;
    } else{
        return salario * 0.25;
    }
}

const mostraResultado = (salario) => {
    if(salario < 1500){
        return `Seu salário é ${salario}, e você é ISENTO`;
    } else{
        return `Seu salário é ${salario}, o imposto é de ${calculaImposto(salario)} e seu salário final é ${salario - calculaImposto(salario)}`;
    }
}

console.log(mostraResultado(1000));
console.log(mostraResultado(1800));
console.log(mostraResultado(2700));