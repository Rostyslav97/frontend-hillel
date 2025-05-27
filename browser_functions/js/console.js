/* Консоль у браузері є потужним інструментом для розробників, що дозволяє
   виконувати код JavaScript в реальному часі, а також слугує інструментом для
   логування, дебагу та інтерактивного тестування веб-додатків.
*/

// console.log() Виводить повідомлення в консоль.
console.log('Hello console');
console.log(1, 2, 3);


// console.error() Виводить помилкове повідомлення в консоль.
// console.error('Hello Error');


// console.warn() Виводить попереджувальне повідомлення в консоль.
// console.warn('Hello warning')


// console.info() Виводить інформаційне повідомлення в консоль.
// console.info('Hello Info')


// console.group() і console.groupEnd()

// console.group("Перша група");
// console.log("Повідомлення 1 у першій групі");
// console.log("Повідомлення 2 у першій групі");
// console.groupEnd();


// console.table() Виводить дані у вигляді таблиці в консолі

// const users = [
//     {name: 'Alex', age: 20},
//     {name: 'Jon', age: 25},
//     {name: 'Vova', age: 21}
// ]
// console.table(users)


// console.time() і console.timeEnd() Дозволяють виміряти час виконання між цими двома викликами.

// console.time("timer");
//
// // Тут розташовується код, тривалість виконання якого ви хочете виміряти
// for(let i = 0; i < 1000000; i++) {
//     let square = i * i;
// }
//
// console.timeEnd("timer");
