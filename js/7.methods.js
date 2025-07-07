'use strict';


// let user = {
//     name: 'Vlad',
//     age: 10,
//     getUser: function(firstName, lastName = 'Dou') {
//         return firstName + ' ' + lastName;
//     }
// }
// //
// //
// let userData = user.getUser('Vova');
// console.log(userData);



let user1 = {
    name: "Vlad",
    age: 10,
    gender: 'male',
    sayHi: function () {
        alert('Hello my name is Vlad')
    }
}

user1.sayHi();

let user2 = {
    name: "Vlad",
    age: 10,
    gender: 'male',
    sayHi() {
        alert('Hello my name is Vlad')
    }
}
//
user2.sayHi();
