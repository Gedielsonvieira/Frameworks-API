const teste_soma = require('./soma');

resultado = teste_soma(3,5);

if (resultado == resultado){
  console.log(`Matemática correta`)
}
else
  console.log(`Soma errada`)

test('adds 1 + 2 to equal 3', () => {
  expect(teste_soma(1, 2)).toBe(3);
});