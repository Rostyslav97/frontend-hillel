'use strict';

/* Function execution context = {
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

const sum = () => {
    var c = 30;
    let a = 10;
    const b = 20;


    const func = (arg1, arg2) => {
        return arg1 + arg2
    }

    return func(a, b)
}

sum()

// console.log(a); // Error
// console.log(b); // Error
// console.log(c); // Error
// console.log(func); // Error

// window.console.log()
console.log(sum.c);
