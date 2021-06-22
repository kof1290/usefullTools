/**
 * 创建Enum对象
 * @param {Array<String> | Array<{name: String, value: Number}} items 要创建的枚举值列表
 * @returns 返回创建的枚举对象
 */
 export default class Enum {
    /**
     * Creates an instance of Enum.
     *
     * @param {Array<String | {name: String, value: Number}>} items 枚举项
     *
     * @memberOf Enum
     */
    constructor(items) {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        let startNum = items[0].value;
        // 枚举值默认从0开始
        if (typeof startNum !== 'number') {
            startNum = 0;
        }

        items.forEach((item, index) => {
            let name = item;
            let value = index;
            if (typeof item !== 'string') {
                name = item.name;
                if (typeof item.value === 'number') {
                    value = item.value;
                }
            }
            name = name.toString();
            let num = value - (0 - startNum);
            this[num] = name;
            this[name] = num;
        });
    }

    /**
     * 枚举对象的遍历方法
     *
     * @param {Function(key: String, value: Number)} callBack 每次遍历枚举值都会调用的方法
     *
     * @memberOf Enum
     */
    forEach(callBack) {
        Object.keys(this).forEach(key => {
            if (typeof key === 'string') {
                callBack(key, Enum[key]);
            }
        });
    }
}
