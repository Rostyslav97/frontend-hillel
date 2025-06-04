'use strict';

// truth for let and const
console.log(user1) // Error
const user1 = 'John Doe';
console.log(user1) // Ok

console.log(user2); // undefined
var user2 = 'Alice Cooper';
console.log(user2); // 'Alice Cooper'
