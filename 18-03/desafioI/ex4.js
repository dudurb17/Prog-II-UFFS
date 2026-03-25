// Faça uma função JS que simule a multiplicação através de adições. Para tal serão pedidos os dois operandos. Por exemplo se for informado 3 e 4, deverá ser calculado, através de soma, 3 * 4, ou seja, 12. Este cálculo é feito somando o primeiro valor informado por ele mesmo o número de vezes representada pelo segundo número. Nesse exemplo, o três seria somado quatro vezes: 3+3+3+3, resultado 12.

const numero1 = Number(prompt("Informe o primeiro número:"));
const numero2 = Number(prompt("Informe o segundo número:"));

const multiplicar = (numero1, numero2) => {
  let resultado = 0;
  for (let i = 0; i < numero2; i++) {
    resultado += numero1;
  }
  return resultado;
};

const resultado = multiplicar(numero1, numero2);
alert(`Resultado: ${resultado}`);
