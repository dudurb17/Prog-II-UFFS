// Uma loja vende produtos à vista e a prazo (pagamento 30 dias depois  da compra). À vista tem um desconto de 5% e a prazo um acréscimo de 10%. Escreva uma arrow function em JS que peça o preço do produto e a forma de pagamento: 1 para à vista; e 2 para a prazo. Depois apresente o preço final do produto. Exemplos de execução:

const calcularPrecoProduto = (preco, formaPagamento) => {
  let precoFinal = 0;
  if (formaPagamento === 1) {
    precoFinal = preco * 0.95;
  } else {
    precoFinal = preco * 1.1;
  }
  alert(precoFinal.toFixed(2).replace(",", "."));
};

const preco = Number(prompt("Informe o preço do produto:").replace(",", "."));
const formaPagamento = Number(
  prompt("Informe a forma de pagamento: \n1 para à vista;\n2 para a prazo:"),
);

const precoFinal = calcularPrecoProduto(preco, formaPagamento);
