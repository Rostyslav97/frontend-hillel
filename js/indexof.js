'use strict';

function customIndexOf(arr, searchElement, fromIndex = 0) {
    let start = fromIndex >= 0 ? fromIndex : arr.length + fromIndex;
    if (start < 0) start = 0;

    for (let i = start; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}


const fruits = ['apple', 'banana', 'cherry', 'banana'];
const index = customIndexOf(fruits, 'banana');

console.log(index);
