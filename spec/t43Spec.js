describe('Cálculo de IMC', () => {
  it('deve devolver "Obesidade Mórbida (Grau III)" para IMC acima de 40', () => expect(calculaImcs({ 'peso': 160, 'altura': 1.7 })).toEqual('Obesidade Mórbida (Grau III)'));

});
