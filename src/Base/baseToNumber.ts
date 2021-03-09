import isSymbol from './isSymbol'

const NAN = 0 / 0

function baseToNumber (value: number | symbol | string): number {
    if (typeof value === 'number') {
        return value
    }
    if (isSymbol(value)) {
        return NAN
    }
    return +(value as string)
}

export default baseToNumber
