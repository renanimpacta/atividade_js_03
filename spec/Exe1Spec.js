describe('Operações Básicas', () => {
  it('3.5 + 4 deve voltar 7.5', () => expect(operacoesBasicas('A', 3.5, 4)).toEqual(7.5))
  it('9 - 1.75 deve voltar 7.25', () => expect(operacoesBasicas('S', 9, 1.75)).toEqual(7.25))
  it('1.8 * 7 deve voltar 12.6', () => expect(operacoesBasicas('M', 1.8, 7)).toEqual(12.6))
  it('7 / 2 deve voltar 3.5', () => expect(operacoesBasicas('D', 7, 2)).toEqual(3.5))
  it('8 elevado a 3 deve voltar 512', () => expect(operacoesBasicas('P', 8, 3)).toEqual(512))
  it('Divisão por zero não deve ser possível', () => expect(operacoesBasicas('D', 32, 0)).toEqual(NaN))
  it('Operação que não existe deve voltar undefined', () => expect(operacoesBasicas('Z',1,2)).toEqual(undefined))
})

describe('Comparador Básico', () => {
  it('3 e 3 são estritamente iguais', () => expect(comparadorBasico(3,3)).toEqual('Elemento 3 (number) é estritamente igual ao elemento 3 (number)'))
  it('undefined e undefined são estritamente iguais', () => expect(comparadorBasico()).toEqual('Elemento undefined (undefined) é estritamente igual ao elemento undefined (undefined)'))
  it('"ABC" e "ABC" são estritamente iguais', () => expect(comparadorBasico("ABC","ABC")).toEqual('Elemento ABC (string) é estritamente igual ao elemento ABC (string)'))
  it('3 e "3" são equivalentes', () => expect(comparadorBasico(3,"3")).toEqual('Elemento 3 (number) é equivalente ao elemento 3 (string)'))
  it('null e undefined são equivalentes', () => expect(comparadorBasico(null)).toEqual('Elemento null (object) é equivalente ao elemento undefined (undefined)'))
  it('1 e 2 são diferentes', () => expect(comparadorBasico(1,2)).toEqual('Elemento 1 (number) é diferente do elemento 2 (number)'))
  it('"1" e 2 são diferentes', () => expect(comparadorBasico("1",2)).toEqual('Elemento 1 (string) é diferente do elemento 2 (number)'))
})
