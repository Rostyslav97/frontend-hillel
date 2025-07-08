'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


const arrFor = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


// arrFor(numbers, (item, index, array) => {
//     console.log(`Item value: ${item}, index: ${index}, arr: ${array.join(', ')}`);
// })

arrFor(numbers, (item, index) => {
    console.log(item**index);
})
numbers.forEach((item, index) => {
    console.log(item**index);
})


const users = ['Ann', 'John', 'Bob', 'Kate', 'Holy']

// arrFor(users, (item) => {
//     console.log('Mr. ' + item);
// });