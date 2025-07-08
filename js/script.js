'use strict';

const padString = (str, num, symbol, left = false) => {
    if (typeof str !== 'string') throw new Error('str should have a string type');
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        throw new Error('num should be a valid number');
    }

    if (typeof symbol !== 'string' || symbol.length !== 1) {
        throw new Error('symbol should be a string type with length 1');
    }
    if (typeof left !== 'boolean') throw new Error('left should be a boolean type');

    if (num <= str.length) return str.substring(0, num);

    if (num < 0) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (left && i <= Math.abs(num) - 1) continue;
            if (!left && i >= Math.abs(num)) continue;
            result += str[i];
        }
        return result;
    }

    const symbolsCount = num - str.length;
    const template = symbol.repeat(symbolsCount);

    return left ? template + str : str + template;
};

const exampleStr = padString('null', 8, '*');
const exampleStr2 = padString('null', 0, '*');
const exampleStr3 = padString('hello', 2, '*');

console.log(exampleStr);
console.log(exampleStr2);
console.log(exampleStr3);
