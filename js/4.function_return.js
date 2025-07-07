'use strict';
// Функція може повернути результат свого виконання

// function sum(a, b) {
//     return a + b;
// }
// //
// //
// let result = sum(1, 2);
// let result2 = sum(10, 30);
// //
// alert(result); // 3
// alert(result2); // 40


// Викликів return може бути декілька

// function checkAge(age) {
//     return age > 17 ? true : confirm('А батьки дозволили?')
// }
//
// let age = +prompt('Скільки вам років?', 18);
//
// if (checkAge(age)) {
//     alert('Доступ отриманий');
// } else {
//     alert('Доступ заборонений');
// }


// function example() {
//     const bar = 20 + 20 - 20 + 20
//     return;
// }
//
// const foo = example()
// console.log(foo)

function example(a = 10, b = 5) {
    return a + b;
    return a - b;
}

console.log(example());


// function example2 () {
//     let a = 2 + 2;
//     a += 200;
//     ++a;
//     return null;
// }
//
// console.log(example2());

