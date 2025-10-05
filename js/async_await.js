'use strict';

// Any function could be async
// const foo = async () => {}
// const bar = async function() {}
// async function baz() {}


// sync code
// const sum = async (a, b) => {
//     console.log('inner log')
//     return a + b;
// }
// const r = sum(1, 2)
// console.log(r, typeof r)
// //
// //
// // async code
// r.then((res) => {
//     console.log(res)
// })


// const getUsers = () => {
//     let url = `https://jsonplaceholder.typicode.com/users`;
//     return fetch(url)
// }
//
// getUsers()
//     .then((res) => {
//         return res.json()
//     })
//     .then((list) => {
//         console.log(list)
//     })
//     .catch(() => {
//
//     })
//     .finally(() => {
//
//     })
//
const getUsers1 = async () => {
    let users = null;

    try {
        users = await fetch(`https://jsonplaceholder.typicode.com/users`);
        users = await users.json();
    } catch (error) {
        console.log(error)
    } finally {
        console.log(users)
    }

}
getUsers1()