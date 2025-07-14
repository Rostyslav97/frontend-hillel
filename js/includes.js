'use strict';

function customIncludes(arr, searchElement, fromIndex = 0) {
    let start = fromIndex >= 0 ? fromIndex : arr.length + fromIndex;
    if (start < 0) start = 0;

    for (let i = start; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

const fruits = ['apple', 'banana', 'cherry'];
console.log(customIncludes(fruits, 'banana'));
console.log(customIncludes(fruits, 'grape'));
