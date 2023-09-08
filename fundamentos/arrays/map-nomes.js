const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);


const nome = "Alura";
let nomeMaiusculas = "";

for (letras of nome) {
 nomeMaiusculas += letras.toUpperCase()
}
console.log(nomeMaiusculas) //ALURA