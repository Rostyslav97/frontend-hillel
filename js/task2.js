'use strict';

function filterUniqueByReference(arr) {
    return [...new Set(arr)];
}

const obj1 = { name: "a" };
const obj2 = { name: "a" };
const input = [obj1, obj1, obj2, obj2, obj1];

console.log(filterUniqueByReference(input));
