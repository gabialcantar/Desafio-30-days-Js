alert("Bem-vindo(a) ao programa que descobre sua fase da vida!");
alert("Siga as instruções na tela para continuar.");

let idade = prompt("Informe a sua idade que vamos advinhar qual fase da vida você se encontra:");

// Validar se a entrada é um número
while (isNaN(idade)) {
  alert("Por favor, digite um número válido para a sua idade.");
  idade = prompt("Informe a sua idade que vamos advinhar qual fase da vida você se encontra:");
}

// Converter para número
idade = Number(idade);

// Classificar a idade e exibir o resultado
if (idade < 12) {
  alert("Você é uma criança!");
} else if (idade >= 12 && idade <= 17) {
  alert("Você é um(a) adolescente!");
} else {
  alert("Você é um(a) adulto(a)!");
}

