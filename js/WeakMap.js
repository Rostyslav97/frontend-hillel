'use strict';


// Зберігає тільки обєкти
const wmap = new WeakMap();

let student = {
    name: 'Daria'
}
let student2 = {
    name: 'Nikolay'
}

let grades = [1, 2, 3, 4]
let grades2 = [1, 2, 3, 4]

wmap.set(student, grades);
wmap.set(student2, grades2);

// student = null
// student2 = null

console.log(wmap)