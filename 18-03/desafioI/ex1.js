// Escreva um algoritmo em JS que peça o número de horas trabalhadas e o valor da hora de um determinado funcionário. Em seguida, calcule o salário do funcionário. O cálculo do salário deve ser feito dentro de uma função, enquanto a leitura e a impressão dos resultados deve ser feita no programa principal. Caso o funcionário tenha trabalhado mais de 200 horas, o salário final é acrescido de 5%. Exemplos de execução:

const horasTrabalhadas = Number(
  prompt("Informes as horas trabalhadas:").replace(",", "."),
);
const valorHora = Number(prompt("Informe o valor da hora:").replace(",", "."));
let salario = horasTrabalhadas * valorHora;
if (horasTrabalhadas > 200) {
  salario = salario * 1.05;
}
console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Valor da hora: ${valorHora}`);
console.log(`Salario: ${salario.toFixed(2).replace(",", ".")}`);
