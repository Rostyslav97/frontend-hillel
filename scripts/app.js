'use strict';

setTimeout(() => {
    console.log(200) // 3
}, 0)

setTimeout(() => {
    console.log(300) // 4
}, 0)

const p = new Promise((resolve) => {
    resolve(1)
})

p.then(() => {
    console.log(1) // 2
})

console.log(100) // 1


