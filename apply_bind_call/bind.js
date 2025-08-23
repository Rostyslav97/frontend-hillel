'use strict';

const user = {
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    getName() {
        return this.name
    }
}

// user.getName() //

const someFunc = function (...args) {
    console.log(args);
    console.log(this);
}

// user.func = someFunc;
// user.func()
// delete user.func

const apply = function (func, context, ...args) {
    context.func = func;
    context.func(...args);
    delete user.func
}

const bind = function (func, context, ...args) {
    return function(...innerArgs) {
        const argsToPass = args.length ? args : innerArgs
        return apply(func, context, ...argsToPass);
    }
}

// apply(someFunc, user, 1, 2, 3, 4, 5);
const binded = bind(someFunc, user, 1, 2, 3)
console.log(binded);
console.log(binded())