function somatorioDivisiveisPor3ou5(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Por favor, forneça um número inteiro positivo.");
  }

  let somatorio = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

try {
  let numero = 10;
  let resultado = somatorioDivisiveisPor3ou5(numero);
  console.log(`O somatório de ${numero}, é: ${resultado}`);
} catch (erro) {
  console.error(erro.message);
}