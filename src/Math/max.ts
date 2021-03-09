import baseExtremum from '../Base/baseExtremum'
import baseGt from '../Base/baseGt'
import identify from '../Base/identify'

function max (array: Array<number>) {
    return (array && array.length)
        ? baseExtremum(array, identify, baseGt)
        : undefined
}

export default max
