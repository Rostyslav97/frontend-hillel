// Array.isArray() возвращает true или false в зависимости от того
// является ли элемент массивом

const arr = [1, 2, 3, 4, 5];
const obj = {
    name: 'Mazda',
    color: 'red'
}

// console.log(typeof arr)
// console.log(typeof obj)

// const arr2 = new Array(100);
// console.log(arr2)

console.log(
    Array.isArray(10)
)

console.log(
    Array.isArray(obj)
)

console.log(
    Array.isArray(arr)
)
