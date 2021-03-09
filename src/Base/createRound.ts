/**
 * 创建一个类似"round"的函数
 */

function createRound (methodName: string) {
    const func = Math[methodName]
    return (number: number, precision?: number): number => {
        // TODO: 这里为什么是292？
        precision = precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292)
        if (precision) {
            // 这里是使用科学计数法来处理浮点数问题
            // 详情请看MDN
            // TODO: 具体是什么问题？
            let pair = `${number}e`.split('e')
            const value = func(`${pair[0]}e${+pair[1] + precision}`)

            pair = `${value}e`.split('e')
            return +`${pair[0]}e${+pair[1] - precision}`
        }
        return func(number)
    }
}

export default createRound
