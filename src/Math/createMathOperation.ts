import baseToNumber from '../Base/baseToNumber'
import baseToString from '../Base/baseToString'

// type mathOperationFunction = (value ?: any, other ?: any) => number
type operator = (value ?: any, other ?: any) => number

function createMathOperation (operator: operator, defaultValue: number) {
    return (value?: any, other?: any) => {
        if (value === undefined && other === undefined) {
            return defaultValue
        }
        if (value !== undefined && other === undefined) {
            return value
        }
        if (other !== undefined && value === undefined) {
            return other
        }
        if (typeof value === 'string' || typeof other === 'string') {
            value = baseToString(value)
            other = baseToString(other)
        } else {
            value = baseToNumber(value)
            other = baseToNumber(other)
        }
        return operator(value, other)
    }
}

export default createMathOperation
