'use strict';

const data = [
    'first',
    'second',
    [1, 2, 3, [0, -1, -2, [0, -1, -2, [0, -1, -2, [0, -1, -2, [0, -1, -2, [0, -1, -2]]]]]]],
    [Infinity, NaN, null],
    ['str1', [0, -1, -2]],
]
// console.log(data)
// console.log(data.flat(Infinity))

const flat = (arr, initialArr = []) => {
    arr.forEach(item => {
        if(!Array.isArray(item)) {
            initialArr.push(item);
        } else {
            flat(item, initialArr)
        }
    })

    return initialArr;
}

console.log(flat(data));