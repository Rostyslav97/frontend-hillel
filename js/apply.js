'use strict';

function myApply(fn, context, args) {
    context.fn = fn;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}


function greet(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const user = { name: "John" };

myApply(greet, user, ["Hello", "!"]);