import isSymbol from './isSymbol'

/**
 * max和min 的基本实现
 * 接受一个比较器来确定极值
 */

function baseExtremum (array: Array<any>, iteratee: Function, comparator: Function) {
    let computed
    let result
    let index = -1
    const length = array.length

    while (++index < length) {
        const value = array[index]
        const current = iteratee(value)

        if (current != null && (computed === undefined
            ? (!isSymbol(current))
            : comparator(current, computed)
        )) {
            computed = current
            result = value
        }
    }
    return result
}

export default baseExtremum
