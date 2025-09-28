'use strict';

// Set - Колекція унікальних даних

const arr = ['Vova', 'Alex', "Vova", 'Vova', 1, 2, 1, 3, 2, 3];

const makeUniq = (arr) => {
    const result = [];

    arr.forEach((item) => {
        if(!result.includes(item)) {
            result.push(item);
        }
    })

    return result;
}


console.log(arr);
console.log(makeUniq(arr));

 const data = new Set(arr);
console.log('set', data)


const u0 = {name: 'Dany'}
const u1 = {name: 'bekkie'}
const u2 = {name: 'dog'}

const data2 = new Set();
data2.add('John')
data2.add('John')
data2.add('John')
data2.add('John')

data2.add(u0)
data2.add(u0)
data2.add(u0)

data2.add(u1)
data2.add(u1)

console.log(data2);
console.log(Array.from(data2)[0]);
console.log([...data2][0]);