describe('Cálculo de IMC', () => {
  it('deve devolver "Excesso de peso" para IMC acima de 25 e abaixo de 30', () => expect(calculaImcs({ 'peso': 72.25, 'altura': 1.7 })).toEqual('Excesso de peso'));
});
