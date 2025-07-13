'use strict';

function foo(a, b) {
    return a + b;
}

const bar = function (a, b) {
    return a - b;
}


const baz = (a, b) => {
    return a * b;
}

const ex = (a = 10, b = 20) => a * b;
