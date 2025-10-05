// Итератор обращается к элементам коллекции по одному,
// в то же время сохраняя память о своей текущей позиции в этой коллекции.
// У итератора есть метод next(), который возвращает следующий элемент
// в последовательности. Этот метод возвращает объект с двумя свойствами: done
// (окончен ли перебор) и value (значение).


// let arr = [11, 12, 13];
//
// let itr = arr[Symbol.iterator]();
//
// console.log(itr)
//
// console.log(itr.next()); // { value: 11, done: false }
// console.log(itr.next()); // { value: 12, done: false }
// console.log(itr.next()); // { value: 13, done: false }

// console.log(itr.next());; // { value: undefined, done: true }

// Работа с DOM

// let liElements = document.querySelectorAll('li');
// let liItr = liElements[Symbol.iterator]();
//
// console.log(liItr.next())
// console.log(liItr.next())
// console.log(liItr.next())
// console.log(liItr.next())

// не работает для обчных объектов объявленных через литерал

// let obj = {
//     name: 'Alex',
//     age: 10,
//     hasDog: true
// }
//
// let objItr = obj[Symbol.iterator]();
//
// console.log(objItr.next());
// console.log(objItr.next());
// console.log(objItr.next());
// console.log(objItr.next());


// Если нужна такая штука то можно дописать ее самом для объектов