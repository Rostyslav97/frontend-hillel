'use strict';

// Big O - Алгоритмічна складність
// Як її визначити - поміряти за який час в нас буде виконання

const user = {
    name: 'John',
    surname: 'ooo',
}

console.log(user.surname); // O(1)


const fruits = ['apple', 'orange', 'melon'];
const filter = ['a', 'c']

fruits.forEach(fruit => {}) // O(n)


for(let i = 0; i < fruits.length; i++) {
    for(let f = 0; f < filter.length; f++) {
        fruits[i].includes(filter[f])
    }
}


fruits.reverse() //