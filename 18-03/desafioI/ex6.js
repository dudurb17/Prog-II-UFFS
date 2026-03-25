// Dada uma sequência de números (um número menor ou igual à 0 finaliza a sequência), apresentar o percentual de números informados que são maior ou igual à 10 e menor ou igual à 20. Exemplo:

const porcentagemNumeros = () => {
  let quantidadeNumerosInformados = 0;
  let quantidadesAceitas = 0;
  let numeroSolicitado = 0;
  do {
    numeroSolicitado = Number(prompt("Informe um número:"));
    if (numeroSolicitado >= 10 && numeroSolicitado <= 20) {
      quantidadesAceitas++;
    }
    if (numeroSolicitado != 0) {
      quantidadeNumerosInformados++;
    }
  } while (numeroSolicitado != 0);
  const porcetagemFinal =
    (quantidadesAceitas * 100) / quantidadeNumerosInformados;
  alert(
    `A porcentagem de numero igual e maior que 10 e menor e igual a 20 é de ${porcetagemFinal}%`,
  );
};

porcentagemNumeros();
