describe('[exe1] operacoesBasicas()', () => {
  it('Divisão por zero não deve ser possível', () => expect(operacoesBasicas('D', 32, 0)).toEqual(NaN))
})
