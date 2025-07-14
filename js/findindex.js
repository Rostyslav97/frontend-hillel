'use strict';

function customFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

const numbers = [5, 12, 18, 25];
console.log(customFindIndex(numbers, x => x > 15));
console.log(customFindIndex(numbers, x => x > 100));
