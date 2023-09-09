const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

