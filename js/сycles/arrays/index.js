// const user = {
//     name: 'Vova',
//     age: 20
// }

// const array = [
//     'John', 'Alice', "Donald", 'Dog'
// ]

let arr2 = [
    [2, 3, 4],
    [2, 3, 4],
    [2, 3, 4],
    [2, 3, 4]
];


// for(const el of arr2) {
//     console.log(el)
//     // for(const innerEl of el) {
//     //     console.log(innerEl)
//     // }
// }

for(let i = 0; i < arr2.length; i++) {
    const currentElement = arr2[i];

    for(let c = 0; c < currentElement.length; c++) {
        console.log(currentElement[c])
    }
}


// console.log(currentElement) // Is on defined

// console.log(arr2)
// console.log(arr2[0][1])

// let arr = [
//     1, 'vova', true, null, undefined, {name: 'John'}, [2, 3, 4]
// ];
//
// console.log(typeof arr);
// console.log(arr[3]);
// console.log(arr)
// console.log(arr.length)
//
// console.log(arr[arr.length - 1])


// const names = [
//     'John', 'Alice', "Donald", 'Dog'
// ]

// console.log(names, typeof names)

// names.forEach((item, index) => {
//     console.log(item, index)
// })
