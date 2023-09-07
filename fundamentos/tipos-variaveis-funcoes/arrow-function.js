function apresentar(nome) {
  return `meu nome é ${nome}`;
}

function imprimir(nome) {
  console.log(nome);
}

const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;

imprimir(apresentarArrow("Leandro"))
imprimir(soma(3,2))

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente números de 1 a 9"
  } else {
    return num1 + num2;
  }
}

imprimir(somaNumerosPequenos(3,3))