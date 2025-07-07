'use strict';
// У функції є доступ до зовнішніх змінних
//
// let userName = 'Вася';
//
// function showMessage() {
//     let message = 'Привіт, ' + userName;
//
//     return {
//         name: 'vova',
//         message
//     }
// }
//
// const userGreet = showMessage();
// console.log(userGreet)
//
// console.log(userGreet.message);



// Функція володіє повним доступом до зовнішніх змінних
// і може змінювати їх значення.


// let userName = 'Вася';
//
// function showMessage() {
//     userName = "Катя"; // (1) змінюємо значення зовнішньої змінної
//
//     let message = 'Привіт, ' + userName;
//     alert(message);
// }
//
// alert( userName );
//
// showMessage();
//
// alert( userName )



// Зовнішня змінна використовується,
// тільки якщо всередині функції немає такої локальної.

// Якщо всередині функції обʼявлена змінна, яка має
// таке ж імʼя, як і зовнішня,
// то при виконанні функції буде використовуватися локальна
// змінна, а зовнішня буде проігнорована.


let userName = 'Вася';

function showMessage() {
    let userName = "Катя"; // оголошуємо локальну змінну

    let message = 'Привіт, ' + userName;
    alert(message);
}

// // функція створить і буде використовувати свою
// // власну локальну змінну userName
// showMessage();

// alert( userName ); // Вася, не змінилася, функція не чіпала зовнішню змінну.
