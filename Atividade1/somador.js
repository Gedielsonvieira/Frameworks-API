`Realize os passos a seguir:

1) Crie uma aplicação em Java/JavaScript
2) Cria uma classe chamada Somador
3) Na classe Somador, crie um método soma que recebe dois parâmetros (inteiros) e retorna a soma entre esses dois valores. Tente tratar todos os casos de exceções, se existentes (mas somente a questão relacionada a inteiros).
4) Crie uma outra classe (Main) e adicione o main. Nessa classe, realize todos os testes possíveis para garantir que a classe Somador está funcional e com qualidade.
5) Pesquise sobre JUnit/Jest. Tente implementar um conjunto de testes para essa classe.

Realizada em aula (Grupo)`

class Somador {
    soma(x,y){
        return x+y;
    }
}

module.exports = Somador;