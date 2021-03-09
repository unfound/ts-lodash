import createMathOperation from './createMathOperation'

const add = createMathOperation((augend: any, addend: any) => augend + addend, 0)

export default add
