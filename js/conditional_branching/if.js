'use strict';

// if(1) {
//     console.log('Hello user!');
// }


// const year = prompt('У якому році було опубліковано специфікацію ECMAScript-2015?', '');
//
// if (year === '2015') {
//     alert( 'Ви маєте рацію!' );
// }
//
// if (year === '2015') {
//     alert( "Правильно!" );
//     alert( "Ви такий розумний!" );
// }

// ELSE

// const year = prompt('У якому році було опубліковано специфікацію ECMAScript-2015?', '');
//
// if (year === '2015') {
//     alert( 'Та ви знавець!' );
// } else {
//     alert( 'А ось і неправильно!' ); // будь-яке значення, крім 2015
// }


// ELSE IF
//
// const year = +prompt('У якому році було опубліковано специфікацію ECMAScript-2015?', '');
//
// if (year < 2015) {
//     alert( 'Це занадто рано...' );
// } else if (year > 2015 && year < 2020) {
//     alert( 'Це запізно.' );
// } else if (year > 2020) {
//     alert( 'ні, не правильно - трохи менше' );
// }  else if(isNaN(year)) {
//     alert('Забирайся геть.!')
// } else {
//     alert( 'Правильно!' );
// }
//
// console.log(1123)

// const num1 = prompt('input number 1');
// // const condition = num1 !== null && !!num1.trim() && !isNaN(+num1)
//
// if(num1 !== null && !!num1.trim() && !isNaN(+num1)) {
//     console.log(num1 ** 2)
// } else {
//     console.log('Wrong input')
// }


// isNaN function
//
// const nan = NaN;
// const mathNaN = nan * 10;
//
// console.log(nan === NaN) // false | wrong

// console.log(isNaN(NaN)); // true
//
// console.log(isNaN(5)); // false
//
// console.log(isNaN("test")); // true

// isNaN - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// Number.isNaN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// let example;
// console.log(isNaN(example))
