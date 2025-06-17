'use strict';

const user = {
    name: 'Alex',
    lastName: 'Doe'
}

// console.log(user.name) // Alex
// console.log(user.lastName) // Doe
console.group('Prototype')
console.log(user);
console.log(user.toString());
console.groupEnd()

const num = 10
console.log(num, typeof num)
console.log(num.toString(), typeof num.toString())
