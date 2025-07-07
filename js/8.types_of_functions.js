'use strict';

/*
  Сигнатура функції - це опис функції, її назви, параметрів та значення, яке вона повертає.

  В JavaScript є декілька способів оголошення функцій
*/


// Function Declaration

// declarationExample('before declaration');
//
// function declarationExample(text) {
//     console.log(text)
// }
//
// declarationExample('after declaration');

/*
    Це стандартний спосіб оголошення; і оголошуючи функції таким чином ми можемо
    викликати її як до, так і після її оголошення.
*/

// Function Expression
// expressionExample('asd')
// const expressionExample = function (text) {
//     console.log(text)
// }
// expressionExample('asd')

// Arrow function

const foo = (x, y) => {
    return x + y;
};

console.log(foo(2, 3));
/*
    Варто памʼятати, що функція відноситься до типу даних Object, а Object - це ссилковий
    тип даних. В даному прикладі ми створюємо анонімну функцію і присвоюємо посилання
    на неї в змінну expressionExample, для того, щоб мати можливість викликати
    її пізніше.

    Також у таких функцій може бути імʼя, зазвичай це робиться для полегшення пошуку
    багів в коді і для того, щоб було простіше ідентифікувати в стек-треку.


    В JavaScript є достатньо багато видів функцій: конструктори,
    генератори, стрілкові функції і т.п. З ними ми познайомимося пізніше.
*/
