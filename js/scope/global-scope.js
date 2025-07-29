'use strict';

// https://developer.mozilla.org/ru/docs/Glossary/Global_object
// https://www.w3schools.com/js/js_scope.asp

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

const age = 20;
let name = "John";
const foo = () => {
    return 2 + 2;
}

function example() {
    console.log(age)
    console.log(name)
    console.log(foo())
}
