const botao = document.getElementById("botao")

function calculoImc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome == '' || altura == '' || peso == '') {
        resultado.textContent = 'Preencha todos os campos!'
    } else {
        const valorImc = (peso / (altura * altura)).toFixed(1)

        let classificação = '';

        if (valorImc < 18.5) {
            classificação = 'abaixo do peso. :('
        } else if (valorImc >= 18.5 && valorImc < 25) {
            classificação = 'com o peso ideal! :)'
        } else if (valorImc >= 25 && valorImc < 30) {
            classificação = 'acima do peso. :('
        } else if (valorImc >= 30 && valorImc < 35) {
            classificação = 'com obesidade grau I. :('
        } else if (valorImc >= 35 && valorImc < 40) {
            classificação = 'com obesidade grau II. :('
        } else {
            classificação = 'com obesidade grau III. :('
        }

        resultado.textContent = `Olá ${nome}! Seu IMC é  ${valorImc} e você está ${classificação}`
    }
}

botao.addEventListener('click', calculoImc)