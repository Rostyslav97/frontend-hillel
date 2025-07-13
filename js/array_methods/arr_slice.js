// Он возвращает новый массив, в который копирует элементы, начиная с
// индекса start и до end (не включая end). Оба индекса start и end могут
// быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.
//
//Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.

// let arr = ["t", "e", "s", "t"];
//
// console.log(arr)
//
// const copiedElements = arr.slice(1, 4);
// const copiedElementsFromTheEnd = arr.slice (-2);

// console.log(copiedElements);
// console.log(copiedElementsFromTheEnd)
//
// console.log(arr)

// Можно делать копию массива если вызываем slice без аргуметоов

// const arr2 = [1, 2, 3, 4, 5, 6];
// const arr3 = arr2.slice();
//
// console.log(arr2)
// console.log(arr3)
// console.log(arr3 === arr2)
