'use strict';
// window це global object тобто він доступний в рамках всього коду.

// console.log('this', this)
// window.console.log('this', this)
// this.console.log('this', this)
const superVariable = 20;
function foo(firstName, lastName) {
    console.log('this функції foo', this)
    const result = {
        firstName: firstName,
        lastName: lastName
    }

    function baz() {
        console.log(superVariable)
    }
    baz()

    return result;
}

const user = foo('Vova', 'Shaitan');
const user2 = window.foo('Alex', 'Doe');

/* Створення контексту виконання

Function execution context = {
    1 this = this binding

    2 LexicalEnvironment = {
        outerEnvironmentRecord = Посилання на зовнішнє лексичне оточення функції (window)
        Type: Declarative
        Data: {
            let, const, function
        }
    }

    3 VariableEnvironment = {
        outerEnvironmentRecord = Посилання на зовнішнє оточення змінних (vars) функції (window)
        Type: Declarative
        Data: {
           var
        }
    }

   ... Other data
}
*/

/* Результат
* {
    firstName: 'Vova',
    lastName: 'Shaitan'
  }
* */


/*
Global execution context = {
    1 this = this binding

    2 LexicalEnvironment = {
        outerEnvironmentRecord = null
        Type: Object
        Data: {
            let, const, function
        }
    }

    3 VariableEnvironment = {
        outerEnvironmentRecord = null
        Type: Object
        Data: {
           var
        }
    }

   ... Other data
}
*/

// Однаково для var і function declaration
// var bar = 20;
// console.log(bar)
// console.log(window.bar)
// console.log(this.bar)
//
// function baz () {}
//
// console.log(baz)
// console.log(window.baz)
//
//
// // Однаково для let та const
// let q = 30;
// console.log(q) // 30
// console.log(window.q) // undefined
// console.log(this.q) // undefined


