import isSymbol from './isSymbol'

const INFINITY = 1 / 0
const symbolToString = Symbol.prototype.toString

function baseToString (value: any): string {
    if (typeof value === 'string') {
        return value
    }
    if (Array.isArray(value)) {
        return `${value.map(baseToString)}`
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : ''
    }
    const result = `${value}`
    // 这个判断是判断什么值？
    // eslint-disable-next-line eqeqeq
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

export default baseToString
