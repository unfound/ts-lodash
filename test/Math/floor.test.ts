import floor from '../../src/Math/floor'

test('floor(4.006) is 4', () => {
    expect(floor(4.006)).toBe(4)
})

test('floor(0.046, 2) is 0.04', () => {
    expect(floor(0.046, 2)).toBeCloseTo(0.04)
})

test('floor(4060, -2) is 4000', () => {
    expect(floor(4060, -2)).toBe(4000)
})
