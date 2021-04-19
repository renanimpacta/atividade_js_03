describe('Somador de Pares', () => {
    it('1 e 4 deve devolver 6', () => expect(somadorPares(1, 4)).toEqual(6))
    it('2 e 10 deve devolver 30', () => expect(somadorPares(2, 10)).toEqual(30))
    it('1 e 10 deve devolver 30', () => expect(somadorPares(1, 10)).toEqual(30))
    it('2 e 11 deve devolver 30', () => expect(somadorPares(2, 11)).toEqual(30))
    it('1 e 11 deve devolver 30', () => expect(somadorPares(1, 11)).toEqual(30))
    it('1 e 3 deve devolver 2', () => expect(somadorPares(1, 3)).toEqual(2));
    it('8 e 8 deve devolver 0', () => expect(somadorPares(8, 8)).toEqual(8));
    it('3 e 3 deve devolver 0', () => expect(somadorPares(3, 3)).toEqual(0));
})
  