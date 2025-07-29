// LIFO - Last in First Out
// https://developer.mozilla.org/ru/docs/Glossary/Call_stack

'use strict';

const first = () => {
    console.log(1)
    second()
    console.log(3)
}

const second = () => {
    console.log(2)
}

first()


const f = 'first';
const s = 'second';

const callStack = [];

callStack.push(f);
callStack.push(s);

// ['first', 'second']

callStack.shift() // Error if callstack
callStack.pop();
