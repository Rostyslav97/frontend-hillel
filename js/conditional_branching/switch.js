'use strict';

// const a = +prompt('input num');
//
//
// // Перевірки завжди суворі з приведенням типів
// switch (a) {
//     case 3:
//         alert('Замало');
//         break;
//     case 4:
//         alert('Точно!');
//         break;
//     case 5:
//         alert('Перебір');
//         break;
//     default:
//         alert("Немає таких значень");
// }
//
// Аналогія свічу
// if (a === 3) {
//     alert('Замало');
// } else if (a === 4) {
//     alert('Точно!');
// } else if (a === 5) {
//     alert('Перебір');
// } else {
//     alert("Немає таких значень");
// }


// Приклад без break:
// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert( 'Замало' );
//     case 4:
//         alert( 'Точно!' );
//     case 5:
//         alert( 'Перебір' );
//     default:
//         alert( "Немає таких значень." );
// }


//Групування «case»
//Кілька варіантів case, що використовують один код, можна групувати.

// let a = 2 + 2;
// const a = +prompt('sum of 2+2');
//
// switch (a) {
//     case 4:
//         alert('Правильно!');
//         break;
//
//     case 3: // (*) групуємо обидва case
//     case 5:
//         alert('Неправильно!');
//         alert("Може вам відвідати урок математики?");
//         break;
//
//     default:
//         alert('Результат має дивний вигляд. Чесно.');
// }
