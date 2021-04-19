describe('[exe1] operacoesBasicas()', () => {
  it('Operação que não existe deve voltar undefined', () => expect(operacoesBasicas('Z',1,2)).toEqual(undefined))
})
