// importando os a classe
import{Pessoa} from './Pessoa.js'


//criando objetos
const pessoa1 = new Pessoa("livia", 23, 78, 1.67);
const pessoa2 = new Pessoa('ana', 12, 98.00, 2.00);
const pessoa3 = new Pessoa('banan', 12, 98.00, 2.00);
const pessoa4 = new Pessoa('asdd', 12, 98.00, 2.00);


//atribuição direta, não recomendada
// pessoa1._nome = 'maria';
// pessoa1._idade = 17;
// pessoa1._peso = 56.43;
// pessoa1._altura = 1.56;

console.log(pessoa1);

console.log(pessoa1._nome);

console.log(pessoa2.calcularImc());

console.log('nome: ' + pessoa1.nome);

console.log('imc: ' + pessoa1.imc);

//setando os atributo do obj
pessoa2.nome = "Anica";

console.log(pessoa2)

//vendo o atributo statico da classe
console.log(Pessoa.totalPessoas)

console.log(pessoa1.classificaImc())









