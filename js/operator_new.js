'use strict'
// https://learn.javascript.info/constructor-new

// Звичайний синтаксис {...} дозволяє створити лише один об’єкт. Але часто нам потрібно
// створити багато однотипних об’єктів, таких як користувачі, елементи меню тощо.
// Це можна зробити за допомогою функції-конструктора та оператора "new".

// Приклад, як робити все вручну — незручно!

// const todoItem1  = {
//     title: 'Привіт ',
//     description: 'Lorem ipsum ...',
//     id: 1
// }
//
// const todoItem2  = {
//     title: 'Заголовок завдання ',
//     description: 'Lorem ipsum ...asdasd',
//     id: 2
// }

// let arr = [todoItem1, todoItem2]

/*
Функції-конструктори

Вимоги:
1. Ім’я функції-конструктора повинно починатися з великої літери.
2. Функцію-конструктор слід викликати за допомогою оператора "new".

*/

// const UserInTheWorld = function () {}                                      // Приклад іменування функції конструктора
// let obj = new UserInTheWorld(1, 2, 3);                       // Виклик з аргументами
// let obj2 = new UserInTheWorld;                               // Виклик без аргументів
//
// console.log(obj, obj2)

// Приклади:

// function User(name) {
//     // this = {};  (неявно)
//
//     this.name = name;
//     this.isAdmin = false;
//
//     // return this;  (неявно)
// }
// //
// const user1 = new User("Вася");
// let user2 = new User("Ann");
// //
// console.log(user1); // Вася
// console.log(user2); // Ann
// //
// //
// console.log(user1.name); // Вася
// console.log(user1.isAdmin); // false

/* Коли функція викликається як new User(...), відбувається таке:

1. Створюється новий порожній об’єкт, і він присвоюється this.
2. Виконується код функції. Зазвичай він модифікує this, додає туди
   нові властивості.
3. Повертається значення this.

З функції-конструктора ми отримаємо такий об’єкт
let user = {
    name: "Вася",
    isAdmin: false
};

*/

/*
return всередині функції-конструктора

Зазвичай конструктори нічого явно не повертають. Їх завдання —
записати все необхідне в this, який зрештою стане результатом.
Але якщо return все ж є, то діє просте правило:
1. При виклику return з об’єктом буде повернено цей об’єкт, а не this.
2. При виклику return з примітивним значенням примітив відкидається.
 */

// function BigUser() {
//     this.name = "Вася";
//
//     return { ageL: 100 }
// }
// console.log(new BigUser());  // отримали цей об’єкт
//
// /* з примітивом */
//
// function BigUser2() {
//     this.name = "Вася";
//     return 100;
// }
//
// console.log( new BigUser2() );  // отримаємо об’єкт this

/* з порожнім return */

// function SmallUser() {
//
//     this.name = "Вася";
//
//     return; // <-- повертає this
// }
// // //
// console.log( new SmallUser() );  // Вася
//
// /* Якщо виклик конструктора без аргументів, то дужки можна опустити; */
//
// let user2 = new SmallUser;
// console.log( user2 ); // Вася

/* Створення методів у конструкторі */

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         alert( "Мене звати: " + this.name );
//     };
// }
//
// let usr1 = new User("Вася", 100);
// let usr2 = new User("ann", 24);
//
// console.log(usr1)
// console.log(usr2)
//
// usr1.sayHi();
// usr2.sayHi();
//
// console.log(usr1.sayHi === usr2.sayHi)

/*
usr1 = {
   name: "Вася",
   sayHi: function() { ... }
}
*/
