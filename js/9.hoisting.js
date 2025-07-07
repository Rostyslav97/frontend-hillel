'use strict';

// Виконання JS файлу йде в 2 етапи
// 1. Зчитування
// 2. Компіляція
//  2.1 Hoisting
//  2.2 Перетворення на байт-код


// Hoisting and how it works
// Початок файлу тут

console.log(a) // undefined

console.log(b) // Error! Cannot access 'b' before initialization
// Temporal Dead Zone

console.log(c) // Error! Cannot access 'c' before initialization
// Temporal Dead Zone

console.log(d)




var a = 10;
let b;
const c = 25;
function d() {}
