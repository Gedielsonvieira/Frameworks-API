`Realize os passos a seguir:

1) Crie uma aplicação em Java/JavaScript
2) Cria uma classe chamada Somador
3) Na classe Somador, crie um método soma que recebe dois parâmetros (inteiros) e retorna a soma entre esses dois valores. Tente tratar todos os casos de exceções, se existentes (mas somente a questão relacionada a inteiros).
4) Crie uma outra classe (Main) e adicione o main. Nessa classe, realize todos os testes possíveis para garantir que a classe Somador está funcional e com qualidade.
5) Pesquise sobre JUnit/Jest. Tente implementar um conjunto de testes para essa classe.

Realizada em aula (Grupo)`

const receberDadosTeclado = require('prompt-sync')({sigint: true});

let nota1 = +receberDadosTeclado('Digite uma nota: ')
let nota2 = +receberDadosTeclado('Digite uma nota: ')

const retorna_soma = (param1, param2) => {
    let soma = (param1 + param2);
    return soma;
}

resultado = retorna_soma(nota1,nota2)

if (resultado == resultado){
  console.log(`${nota1} + ${nota2} = ${resultado} = Matemática correta`)
}
else
    console.log(`Soma errada`)

module.exports = retorna_soma;