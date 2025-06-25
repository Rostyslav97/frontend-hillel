// Цикл do...while

// do {
//     // тіло циклу
// } while (condition);


// Приклад do...while циклу

// let i = 0;
// do {
//     console.log( i );
//     i++;
// } while (i < 3);


// Приклад 2

// let i = 0;
//
// do {
//     console.log( i )
// } while (i !== 0);


// Приклад використання do..while циклу

// let guessedCorrectly = false;
// const randomNumber = Math.floor(Math.random() * 10) + 1;
//
// do {
//     const userGuess = prompt("Вгадай число від 1 до 10:");
//     if (parseInt(userGuess, 10) === randomNumber) {
//         alert("Вітаю! Ви вгадали число!");
//         guessedCorrectly = true;
//     } else {
//         alert("Спробуйте ще раз.");
//     }
// } while (!guessedCorrectly);
