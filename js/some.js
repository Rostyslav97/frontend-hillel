'use strict';

function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 3, 5, 6];
console.log(customSome(numbers, x => x % 2 === 0));
console.log(customSome(numbers, x => x > 10));
