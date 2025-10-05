// Функция-генератор возвращает итерируемый объект при своём вызове.
// Функция-генератор записывается с помощью знака * после ключевого слова
// function, а в теле функции должно присутствовать ключевое слово yield.



// let obj = {
//     name: 'Alex',
//     age: 100
// }
//
// const objItr = Object.keys(obj)[Symbol.iterator]();
// console.log(objItr.next())
//
//
//
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
//
//
// for (const key in obj) {
//
// }



// function a() {
//     return 1
// }


// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//
//     return;
// }
//
//
// const gen = generator(); // "Generator { }"
//
// console.log(gen);
// //
// console.log(gen.next()); // 1
// console.log(gen.next()); // 2
// console.log(gen.next()); // 3
// console.log(gen.next()); // undefined



// function* infiniteNumbers() {
//     let a = 0;
//     while (true) {
//         yield ++a;
//     }
// }
//
// const infNum = infiniteNumbers();
//
// console.log(
//     infNum.next()
// )
// console.log(
//     infNum.next()
// )
//
// console.log(
//     infNum.next()
// )




// function* iterateObject(obj) {
//     for(const key in obj) {
//         yield {
//             [key]: obj[key]
//         }
//     }
// }
//
// let gen = iterateObject({name: 'Vladimir', age: 20});
//
// console.log(gen.next())
// console.log(gen.next())


// function* iterateObject2(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(const key in arr[i]) {
//             yield {
//                 [key]: arr[i][key]
//             }
//         }
//     }
// }
//
// let gen2 = iterateObject2([{name: 'Vladimir', age: 20}, {name: 'Alex', age: 24}])

// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())


// console.log(gen2.next())
// console.log(gen2.next())



// for(const data of gen) {
//     console.log(data)
// }


// for (let i = 0; i <5 ; i ++) {
//     console.log(i)
//     alert()
// }
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//
//     return;
// }
//
// console.log(generator().next().value); // 1
// console.log(generator().next().value); // 1
// console.log(generator().next().value); // 1

function* infiniteNumbers() {
    let n = 1;
    while (true) {
        yield n++;
    }
}


let numbers = infiniteNumbers(); // возвращает перебираемый объект
//
console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
//
// console.log('hello')
//
// console.log(numbers.next()); // { value: 3, done: false }
//
//
// for(let i = 0; i < 100; i++) {
//     console.log(numbers.next())
// }
