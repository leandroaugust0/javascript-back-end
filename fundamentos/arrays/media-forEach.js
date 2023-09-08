const notas = [10, 6.5, 8, 7.5];

let media = 0;

notas.forEach(function (nota) {
  media += nota / notas.length;
});

console.log(`A média das notas é ${media}.`)