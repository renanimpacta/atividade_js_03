describe('Cálculo de IMC', () => {
  it('deve devolver "Normal" para IMC acima de de 18.5 e abaixo de 25', () => expect(calculaImcs({ 'peso': 60, 'altura': 1.7 })).toEqual('Normal'));
});
