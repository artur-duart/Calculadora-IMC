'use strict';

const botao = document.getElementById('botao');

function calculoImc() {
	const nome = document.getElementById('nome').value;
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');

	if (nome == '' || altura == '' || peso == '') {
		resultado.textContent = 'Preencha todos os campos!';
	} else {
		const valorImc = (peso / (altura * altura)).toFixed(1);

		let classificacao = '';
		let frase = '';

		if (valorImc < 18.5) {
			classificacao = 'abaixo do peso. <span class="red">:(</span>';
			frase = 'Cuidado';
		} else if (valorImc >= 18.5 && valorImc < 25) {
			classificacao = 'com o peso ideal! <span class="green">:)</span>';
			frase = 'Parabéns';
		} else if (valorImc >= 25 && valorImc < 30) {
			classificacao = 'acima do peso. <span class="red">:(</span>';
			frase = 'Cuidado';
		} else if (valorImc >= 30 && valorImc < 35) {
			classificacao = 'com obesidade grau I. <span class="red">:(</span>';
			frase = 'Cuidado';
		} else if (valorImc >= 35 && valorImc < 40) {
			classificacao =
				'com obesidade grau II. <span class="red">:(</span>';
			frase = 'Cuidado';
		} else {
			classificacao =
				'com obesidade grau III. <span class="red">:(</span>';
			frase = 'Cuidado';
		}

		resultado.innerHTML = `Olá ${nome}! Seu IMC é  ${valorImc} e você está ${classificacao} `;
	}
}

function capturarEnter(event) {
	if (event.key == 'Enter') {
		calculoImc();
	}
}

botao.addEventListener('click', calculoImc);
document.querySelector('form').addEventListener('keypress', capturarEnter);
