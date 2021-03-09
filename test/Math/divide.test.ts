import divide from '../../src/Math/divide'

test('divide(6, 4) is 1.5', () => {
    expect(divide(6, 4)).toBeCloseTo(1.5)
})

test('divide(6, 2) is 3', () => {
    expect(divide(6, 2)).toBeCloseTo(3)
})

test('divide(6, 0) is Infinity', () => {
    expect(divide(6, 0)).toBe(Infinity)
})
