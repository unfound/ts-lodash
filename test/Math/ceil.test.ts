import ceil from '../../src/Math/ceil'

test('ceil(4.006) is 5', () => {
    expect(ceil(4.006)).toBe(5)
})

test('ceil(6.004, 2) is close to 6.01', () => {
    expect(ceil(6.004, 2)).toBeCloseTo(6.01)
})

test('ceil(6040, -2) is 6100', () => {
    expect(ceil(6040, -2)).toBe(6100)
})
