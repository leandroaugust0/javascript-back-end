const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2001/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Mariana",
  email: "mariana@gmail.com",
  nascimento: "1991/01/01",
  role: "admin",
  criarCurso() {
    console.log("Curso criado!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

// user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir();

// const exibir = function () {
//   console.log(this.nome);
// };

// const exibirNome = exibir.bind(user);
// exibirNome();
// exibir();
