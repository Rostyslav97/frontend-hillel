'use strict';

const padString = (str, num, symbol, left=false) => {
    // console.log(str, num, symbol, left);

    if (typeof str !== 'string') throw new Error('str should have a string type');
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        throw new Error('num should be a valid number');
    }

    if (num === 0) return str;

    if (typeof symbol !== 'string' || symbol.length !== 1) {
        throw new Error('symbol should be a string type with length 1');
    }
    if (typeof left !== 'boolean') throw new Error('left should be a boolean type');

    // v1
    // if (num < 0) {
    //     return str.substring(0, str.length -Math.abs(num));
    // }

    // v2
    if (num < 0) {

        // if (!left) return str.substring(0, str.length - Math.abs(num));
        // const reversedStr = str.split('').reverse().join('');
        // let result = reversedStr.substring(0, str.length - Math.abs(num));
        // result = result.split('').reverse().join('');

        let result = ''
        for (let i = 0; i < str.length; i++) {
            if (left && i <= Math.abs(num) -1) continue;
            if (!left && i >= Math.abs(num)) continue;
            result += str[i]
        }
        return result;
    }

    const symbolsCount = num - str.length;
    const template = symbol.repeat(symbolsCount);

    // console.log(symbolsCount);
    // console.log(template);

    return left ? template + str : str + template;
}


// padString('null', 8, '*', true)

const exampleStr = padString('null', 8, '*');
const exampleStr2 = padString('null', 0, '*');
const exampleStr3 = padString('hello', 2, '*', true);
// console.log(exampleStr);
// console.log(exampleStr2);
console.log(exampleStr3);