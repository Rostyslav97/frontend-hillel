'use strict';

// function foo(num) {
//     console.log(num)
// }
//
// foo(10) // 10
// foo() // undefined

// Якщо параметр не вказаний, то його значенням стає undefined.

// function showMessage(from, text) {
//     let defaultFrom = 'Alex';
//     if(typeof from !== 'undefined') defaultFrom = from;
//
//     let defaultText = 'Lorem ipsum';
//     if(typeof text !== 'undefined') defaultText = text;
//
//     console.log(defaultFrom, defaultText)
//
// }
//
// showMessage()
// showMessage('Ann', 'Dog mother')

// Передача аргументів за замовчуванням


function showMessage2(from = 'Alex', text = 'Hello dog') {
    console.log(from, text)
}

// showMessage2(undefined, undefined)
// showMessage2('Ann', 'Dog mother')

// Якщо аргумент text не вказаний, то він буде містити значення,
// яке йому передано при оголошенні функції(таким значенням може
// бути вираз або результат виконування іншої функції)

