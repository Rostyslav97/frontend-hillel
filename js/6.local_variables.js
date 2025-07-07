'use strict';
// Змінні обʼявлені всередині функції,
// видимі тільки всередині цієї функції.

function showMessage() {

    let message = "Привет, я JavaScript!"; // локальна змінна

    alert( message );
}

showMessage(); // Привіт, я JavaScript!

alert( message ); // <-- буде помилка, так як змінна видима тільки всередині функції

// Block scope
// if() {}
// for() {}, while, do_while, for_of, for_in
// switch() {}
// {} - code block

// functional scope
// function, class, () => {}

