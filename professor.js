function calculoImc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(1)
}

function classificar(imc) {

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'abaixo do peso. :('
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'com o peso ideal! :)'
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'acima do peso. :('
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'com obesidade grau I. :('
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'com obesidade grau II. :('
    } else {
        classificacao = 'com obesidade grau III. :('
    }

    return classificacao
}

function camposValidos() {
    return document.querySelector('form').reportValidity()
}

function exibirResultado() {
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    if (camposValidos) {
        const imc = calculoImc(peso, altura)
        const classificacao = classificar(imc)

        resultado.textContent = `Olá ${nome}! Seu IMC é  ${imc} e você está ${classificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

document.getElementById("botao").addEventListener('click', exibirResultado)