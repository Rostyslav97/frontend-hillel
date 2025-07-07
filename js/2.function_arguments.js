'use strict';

// function showMessage(from, text) {  // аргументи: from, text
//     console.log(from + ': ' + text);
// }
//
// showMessage('Аня', 'Привіт!'); // Аня: Привіт! (*)
// showMessage('Аня', "Як справи?"); // Аня: Як справи? (**)


// Зміна значення аргументу в функції

// function showMessage1(from, text) {
//     const result = '*' + from + '*'
//     console.log( result + ': ' + text );
// }
//
// function showMessage2(from, text) {
//     from = '*' + from + '*'
//     console.log( from + ': ' + text );
// }
//
// let userName = "Аня";
//
// showMessage1(userName, "Привіт");
// showMessage2(userName, "Привіт");

// значення "from" залишилося таким самим,
// функція змінила значення локальної змінної

// alert( from ); // Аня

// Зміна значення аргументу в функції обєкт

// function increaseAge1(user) {
//     user.lastName = 'Shaitan';
//
//     // console.log(user);
//     // return user
// }


// function increaseAge2(user) {
//     const result = {...user}
//     result.lastName = 'Shaitan';
//
//     return result
// }
//
// const userData = {
//     name: 'Vova',
//     age: 20,
// }
//
// const userData2 = increaseAge2(userData);
//
// console.log(userData)
// console.log(userData2)
// console.log(userData2 === userData)

// const names = ['Alex', 'Alina', 'Vova'];
// const ages = [28, 23, 22];
//
// function iterateArr(arr) {
//     for(const item of arr) {
//         console.log(item)
//     }
// }
//
// iterateArr(names)
// iterateArr(ages)
