// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item
// });

const arr = ["Bilbo", "Gandalf", "Nazgul"];
console.log(arr)

arr.forEach((item, item, arr) => {
    console.log(item)
})


// const forEach = (arr, callback) => {
//     for(let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr)
//     }
// }

// forEach(arr, function (item, index, arr) {
//     console.log(item, index, arr)
// })
