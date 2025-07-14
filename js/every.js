'use strict';

function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const numbers = [2, 4, 6, 8];
console.log(customEvery(numbers, x => x % 2 === 0));
console.log(customEvery(numbers, x => x > 5));
