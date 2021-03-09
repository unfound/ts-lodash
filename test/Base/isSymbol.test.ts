import isSymbol from '../../src/Base/isSymbol'

test('Symbol.iterator isSymbol is true', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
})

test('"123" isSymbol is false', () => {
    expect(isSymbol('123')).toBe(false)
})
