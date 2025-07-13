'use strict';

const user = {
    name: 'Volodymyr',
    lastName: 'Shaitan',
    age: 27,
    greet() {
       // return 'Hello my Name is Vova. Nice to meet you';
       return `Hello my Name is ${this.name}. Nice to meet you`;
    }
}

// console.log(
//     user.greet()
// )

const arr = [1, 2, 3, 4, 5, 6, 'cat'];
console.log(arr)
console.log(typeof arr)

console.log(
    arr.includes('cat')
)

console.log(
    arr.includes('dog')
)


const names = ['John', 'Ann']
console.log(names)
