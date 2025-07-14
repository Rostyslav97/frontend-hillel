'use strict';

function customLastIndexOf(arr, searchElement, fromIndex) {
    let start = fromIndex !== undefined
        ? (fromIndex >= 0 ? Math.min(fromIndex, arr.length - 1) : arr.length + fromIndex)
        : arr.length - 1;

    for (let i = start; i >= 0; i--) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}


let arr = ['Alex', 'Vlad', 'Helen', 'Yuriy', "Alex"];
const index = customLastIndexOf(arr, 'Alex');

console.log(index);
