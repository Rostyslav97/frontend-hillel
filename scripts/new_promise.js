'use strict';


// const getRandomNumber = () => {
//     const promise = new Promise((resolve, reject) => {
//         // resolve('Success resolve')
//         reject('Fail resolve');
//     })
//     return promise;
// }
//
// getRandomNumber()
//     .then((data) => {
//         console.log('then', data)
//     })
//     .catch((err) => {
//         console.log('catch', err)
//     })
//     .finally(() => {
//         console.log('finally', 'Promise is finished.');
//     })


// const getRandomNumber = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const n = Math.random();
//             resolve(n);
//         }, Math.random() * Math.random() * 1000);
//     })
//     return promise;
// }
//
// getRandomNumber()
//     .then((data) => {
//         console.log('then', data)
//     })


const getRandomNumber = () => {
    // Promise states
    // pending = initial state
    // fulfilled = success state (when promise resolved)
    // rejected = failure state (when promise rejected)

    const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const n = Math.floor(Math.random() * 10);

                if(n > 5) {
                    resolve(n)
                } else {
                    reject({data: `'Error', ${n}`})
                }

            }, Math.random() * (Math.random() * 1000))
    })

    return promise;
}

getRandomNumber()
    .then((data) => {
        console.log('then', data)
    })
    .catch((reason) => {
        console.log(reason)
    })


console.log();


