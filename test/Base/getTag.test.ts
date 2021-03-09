import getTag from '../../src/Base/getTag'

it('null getTag is [object Null]', () => {
    expect(getTag(null)).toBe('[object Null]')
})
