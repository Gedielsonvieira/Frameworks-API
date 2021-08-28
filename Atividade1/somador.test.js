const Somador = require('./somador');

const somador = new Somador();

test('Testando Soma dos Positivos (30,20)', () => {
    expect(somador.soma(30,20)).toBe(50);
});

test('Testando Soma dos Negativos (-20,-20)', () => {
    expect(somador.soma(-20,-20)).toBe(-40);
});

test('Testando Soma do Positivo e Negativo (15,-20)', () => {
    expect(somador.soma(15,-20)).toBe(-10);
});

test('Testando Soma do Positivo e Zero (0,50)', () => {
    expect(somador.soma(0,50)).toBe(50);
});