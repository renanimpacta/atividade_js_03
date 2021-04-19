describe('Cálculo de IMC', () => {
  it('deve devolver "Obesidade Severa (Grau II)" para IMC acima de 35 e abaixo de 40', () => expect(calculaImcs({ 'peso': 101.15, 'altura': 1.7 })).toEqual('Obesidade Severa (Grau II)'));

});
