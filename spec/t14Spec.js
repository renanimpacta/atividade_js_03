describe('[exe1] comparadorBasico()', () => {
  it('"1" e 2 são diferentes', () => expect(comparadorBasico("1",2)).toEqual('Elemento 1 (string) é diferente do elemento 2 (number)'))
})
