// Faça uma função JS que peça 4 números inteiros. Em seguida, apresente quantos números informados são negativos e quantos são positivos (considere o 0 como positivo). Exemplos de execução:

let numeroPositivos = 0;
let numeroNegativos = 0;

for (let i = 0; i < 4; i++) {
  const numeroInformado = Number(prompt(`N${i + 1}`));
  if (numeroInformado >= 0) {
    numeroPositivos++;
  } else {
    numeroNegativos++;
  }
}

alert(`${numeroPositivos}(+) e ${numeroNegativos}(-)`);
