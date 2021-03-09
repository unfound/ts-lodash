import baseToNumber from '../../src/Base/baseToNumber'

test('123 baseToNumber is 123', () => {
    expect(baseToNumber(123)).toBe(123)
})

test('"123" baseToNumber is 123', () => {
    expect(baseToNumber('123')).toBe(123)
})
