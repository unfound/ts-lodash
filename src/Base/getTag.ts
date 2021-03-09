const toString = Object.prototype.toString

function getTag (value: any): string {
    /** undefined == null为true */
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(value)
}

export default getTag
