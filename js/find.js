'use strict';

function customFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}


const numbers = [10, 20, 30, 40];
console.log(customFind(numbers, x => x > 25));
console.log(customFind(numbers, x => x < 0))
