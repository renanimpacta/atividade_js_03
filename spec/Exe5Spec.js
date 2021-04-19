describe('Cálculo de IMC', () => {
  
  it('deve devolver "Abaixo do peso" para IMC abaixo de 18.5', () => expect(calculaImcs({ 'peso': 50, 'altura': 1.7 })).toEqual('Abaixo do peso'));
  it('deve devolver "Normal" para IMC acima de de 18.5 e abaixo de 25', () => expect(calculaImcs({ 'peso': 60, 'altura': 1.7 })).toEqual('Normal'));
  it('deve devolver "Excesso de peso" para IMC acima de 25 e abaixo de 30', () => expect(calculaImcs({ 'peso': 72.25, 'altura': 1.7 })).toEqual('Excesso de peso'));
  it('deve devolver "Obesidade Leve (Grau I)" para IMC acima de 30 e abaixo de 35', () => expect(calculaImcs({ 'peso': 86.7, 'altura': 1.7 })).toEqual('Obesidade Leve (Grau I)'));
  it('deve devolver "Obesidade Severa (Grau II)" para IMC acima de 35 e abaixo de 40', () => expect(calculaImcs({ 'peso': 101.15, 'altura': 1.7 })).toEqual('Obesidade Severa (Grau II)'));
  it('deve devolver "Obesidade Mórbida (Grau III)" para IMC acima de 40', () => expect(calculaImcs({ 'peso': 160, 'altura': 1.7 })).toEqual('Obesidade Mórbida (Grau III)'));

});
