// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив
// результатов выполнения этой функции.

//Например, здесь мы преобразуем каждый элемент в его длину:
let arr = ["Bilbo", "Gandalf", "Nazgul"]

const arrNum = arr.map((item, index, arr) => {
    return item.length
})

console.log(arrNum)




// const map = (arr, callback) => {
//     const result = [];
//
//     for(let i = 0; i < arr.length; i++) {
//         result.push(
//             callback(arr[i], i, arr)
//         )
//     }
//
//     return result;
// }
//
// const newArr = map(arr, (item) => {
//     return item + '_' + item.length
// })
//
// console.log(newArr)
