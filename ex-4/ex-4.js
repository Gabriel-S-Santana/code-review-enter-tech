let valor1 = Number(prompt('Escreva um número:'));
let valor2 = Number(prompt('Escreva outro número:'));

function maximo(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1
    }
    else if (valor2 > valor1) {
        return valor2
    }
    else {
        return 'São iguais, portanto nenhum'
    }
}

alert(`${maximo(valor1, valor2)} é o maior`);