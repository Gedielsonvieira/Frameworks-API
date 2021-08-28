const Somador = require("./somador");

let somador = new Somador();

console.log("Testando Soma dos Positivos");
console.log(somador.soma(10,20) === 30);

console.log("Testando Soma dos Negativos");
console.log(somador.soma(-10,-20) === -30);

console.log("Testando Soma Positivo e Zero");
console.log(somador.soma(10,0) === 10);

console.log("Testando Soma Positivo e Negativo");
console.log(somador.soma(10,-20) === -10);

