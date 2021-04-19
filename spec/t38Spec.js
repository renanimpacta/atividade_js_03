describe('Cálculo de IMC', () => {
  it('deve devolver "Abaixo do peso" para IMC abaixo de 18.5', () => expect(calculaImcs({ 'peso': 50, 'altura': 1.7 })).toEqual('Abaixo do peso'));
});
