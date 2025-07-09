'use strict';

function myBind(fn, context, ...bindArgs) {
    return function(...callArgs) {
        const tempKey = Symbol();
        context[tempKey] = fn;
        const result = context[tempKey](...bindArgs, ...callArgs);
        delete context[tempKey];
        return result;
    };
}


function greet(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const user = { name: "John" };

const boundGreet = myBind(greet, user, "Hello");
boundGreet("!");