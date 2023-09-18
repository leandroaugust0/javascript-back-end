import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "m@m.com", "2001-01-01");
console.log(novoUser.nome);

const novoAdmin = new Admin("Rodrigo", "r@r.com", "1981-01-01");
console.log(novoAdmin.nome);
novoAdmin.nome = "Pedro";
console.log(novoAdmin.nome);

const novoDocente = new Docente("Guilherme", "g@g.com", "1991-01-01");
console.log(novoDocente.exibirInfos());
