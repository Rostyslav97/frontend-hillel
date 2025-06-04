// Undefined

/*
    undefined - примітивний тип даних, який присвоюється змінним як тільки вони
    були оголошені. Також присвоюється аргументам функції, які не були передані, і
    повертається з функцій усередині яких відсутнє 'return value' або присутнє
    'return' без значення.

    Не може повернутися з функції, яка викликана через оператор 'new'.

    А також ми можемо задати це значення явно.

    Також ми можемо отримати його і в інших випадках, зазвичай коли значення не визначено.
*/

let exampleUndefined_1; // undefined
console.log(typeof exampleUndefined_1)

exampleUndefined_1 = 100
console.log(typeof exampleUndefined_1)



function exampleUndefined_2(a, b) {
    console.log('func arguments', a, b);
}
exampleUndefined_2();





function exampleUndefined_3() {
    return;
}

console.log(
    'Empty return value',
    exampleUndefined_3()
)





function exampleUndefined_4() {
    let a = 2 + 2;
}

console.log(
    'No return value',
    exampleUndefined_4()
)


/*
    Потрібно намагатися уникати значення undefined, до того моменту поки алгоритм
    розв'язання вашої задачі не вимагатиме зворотного.

    Для того, щоб уникнути undefined є кілька способів. Найпростішим із них
    є ініціалізація змінної відразу зі значенням, а також використання
    let і const замість var
*/

let foo = 10;    // Good

let bar;         // Bad
bar = 10;

var baz = 10;   // Bad


let zar = undefined;   // Very Bad
console.log(zar);