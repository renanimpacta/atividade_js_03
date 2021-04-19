describe('Cálculo de IMC', () => {
  it('deve devolver "Obesidade Leve (Grau I)" para IMC acima de 30 e abaixo de 35', () => expect(calculaImcs({ 'peso': 86.7, 'altura': 1.7 })).toEqual('Obesidade Leve (Grau I)'));

});
