// Faça uma função JS que calcule a duração de um evento qualquer. Para tal, o programa pede a hora de início e hora de fim (sem os minutos), as horas serão informadas de 0 a 23. Perceba que um evento pode começar em um dia e acabar em outro. Os eventos nunca duram mais de 24 horas. Exemplos de execução:

//Início: 12		Início: 10		Início: 21
// Fim: 4			Fim: 15		Fim: 6
// Duração: 16 horas	Duração: 5 horas	Duração: 9 horas

const inicio = Number(prompt("Informe o horário de início do evento:"));
const fim = Number(prompt("Informe o horário de fim do evento:"));

const calcularDuracaoEvento = (inicio, fim) => {
  if (inicio < fim) {
    return fim - inicio;
  } else {
    return 24 - inicio + fim;
  }
};

const duracao = calcularDuracaoEvento(inicio, fim);
alert(`Duração: ${duracao} horas`);
