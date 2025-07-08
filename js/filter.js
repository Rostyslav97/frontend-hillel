'use strict';


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const users = ['Volodymyr', 'Ann', 'John', 'Bob', 'Kate', 'Holy', 'Olexander']

const filter = (arr, cb) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            result[result.length] = arr[i]
        }
    }

    return result;
}

const filteredUsers = filter(users, (item) => {
    return item.length > 3
})

console.log(filteredUsers);


const filtereedNumbers = filter(numbers, (item) => {
    if (Math.abs(item) === 0) return false;
    return item % 2 === 0;
});

console.log(filtereedNumbers);