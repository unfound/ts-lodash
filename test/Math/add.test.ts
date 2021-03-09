import add from '../../src/Math/add'

test('add(1, 2) is 3', () => {
    expect(add(1, 2)).toBe(3)
})

test('add(1) is 1', () => {
    expect(add(1)).toBe(1)
})

test('add(undefined, 2) is 2', () => {
    expect(add(undefined, 2)).toBe(2)
})

test('add("1", 2) is 3', () => {
    expect(add('1', 2)).toBe('12')
})

test('add([1,2]) is [1,2]', () => {
    expect(add([1, 2])).toEqual([1, 2])
})
