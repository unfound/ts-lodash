import max from '../../src/Math/max'

test('max([]) is undefined', () => {
    expect(max([])).toBe(undefined)
})

test('max([1,5,8,45,2,1]) is 45', () => {
    expect(max([1, 5, 8, 45, 2, 1])).toBe(45)
})
