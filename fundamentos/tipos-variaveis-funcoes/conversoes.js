// conversão implicita
const numero = 456;
const numeroString= "456";

console.log(numero == numeroString);
console.log(numero + numeroString);

// conversão explicita
console.log(numero + Number(numeroString));