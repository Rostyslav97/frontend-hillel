/*
    Перетворення при математичних функціях і
    виразах, крім операції додавання
*/

//
// console.log( 6 / "2" ); // 3, рядки перетворюються на числа
//
//
// // явне перетворення на число
//
// let str = '123';
// console.log(str + str, str, typeof str); // string
//
// let num = Number(str); // стає числом 123
// console.log(num + num, num, typeof num); // number


// // помилка під час перетворення рядка на число
// let num1 = '10';
// let num2 = "   90 ";
// let num3 = "10.321 2312 ..asd"
//
//
// console.log(Number(num1), typeof Number(num1));
// console.log(Number(num2), typeof Number(num2));
// console.log(Number(num3), typeof Number(num3)); // NaN, перетворення не вдалося
// console.log(parseInt(num3))
// console.log(parseFloat(num3))

// let age;
//
// console.log(age, Number(age))
//
// console.log( Number(undefined) );
//
// console.log( Number( null ), typeof null );
//
// console.log( Number(true), Number(false) );


// Правила чисельного перетворення:

// undefined  - NaN
//
// null - 0
//
// true / false	- 1 / 0
//
// Пробільні символи по краях обрізаються. Далі, якщо залишається
// порожній рядок, то отримуємо 0,
// інакше з непорожнього рядка "зчитується" число. У разі помилки результат NaN.

const foo = '1000';
console.log( typeof +foo )
