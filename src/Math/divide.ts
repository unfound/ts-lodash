import createMathOperation from './createMathOperation'

const divide = createMathOperation((dividend: number, divisor: number) => dividend / divisor, 1)

export default divide
