'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const users = ['Ann', 'John', 'Bob', 'Kate', 'Holy']


const map = (arr, cb) => {
    const results = [];

    for (let i = 0; i < arr.length; i++) {
        results[i] = cb(arr[i], i, arr);
    }
    return results;
}

const ex = map (numbers, (item, index) => {
    return item ** index
})

console.log(numbers);
console.log(ex);



const ex2 = map (users, (item) => {
    return `${item}_${item.length}`
})
console.log(ex2);
