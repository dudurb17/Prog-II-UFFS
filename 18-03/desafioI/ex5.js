// Faça uma função usando a sintaxe arrow function, que peça um valor e imprima a soma de todos os números de 1 até o valor informado. Por exemplo, se o valor informado for 6, o resultado será 21, ou seja, 1 + 2 + 3 + 4 + 5 + 6.

const valorSoma = prompt("Informe um valor:");

const somar = (valorSoma) => {
  let valorTotal = 0;
  for (let i = 1; i <= valorSoma; i++) {
    valorTotal += i;
  }
  return valorTotal;
};

const resultado = somar(valorSoma);
alert(`Resultado: ${resultado}`);
