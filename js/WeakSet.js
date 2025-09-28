'use strict';

let student = {
    name: 'Daria'
}
let student2 = {
    name: 'Nikolay'
}

// const s = new Set([1, 2, 3, 4, 3, 3, 3])
const wSet = new WeakSet([student, student2, student])

student = null;

console.log(wSet)






