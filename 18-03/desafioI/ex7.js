// Faça uma função recursiva em JS para calcular o fatorial de um número dado. O fatorial de um número é n × (n − 1) × (n − 2) × . . . × 1. Por definição, o fatorial de 0 e 1 são 1. Por exemplo, o fatorial de 5 é 120, ou seja, 5 × 4 × 3 × 2 × 1 (perceba que não  é necessário fazer a última multiplicação já que 1 é o elemento neutro da multiplicação).

const calculadoraFatorial = () => {
  const valorInformado = Number(
    prompt("Informe o valor para saber seu fatorial: "),
  );
  let fatorial = valorInformado;
  for (i = valorInformado - 1; i > 1; i--) {
    fatorial = fatorial * i;
  }
  alert(`O calculo do seu fatorial é ${fatorial}`);
};
calculadoraFatorial();
