// Symbol

// symbol — це унікальний і незмінний тип даних, який може бути використаний як
// ідентифікатор для властивостей об'єктів. Для створення символьного примітиву ми можемо
// використовувати функцію Symbol([опис])

const a = 10;
const b = 10;

// console.log(a === b)


const user1 = {
    id: Symbol(),
    name: 'Vova',
    age: 10
}


const user2 = {
    id: Symbol(),
    name: 'Vova',
    age: 10
}

// console.log(user1.id === user2.id)

// Створюємо новий символ
// let symbolExample_1 = Symbol();
// console.log(symbolExample_1)

// Символи завжди унікальні, навіть якщо ми створимо їх з однаковим описом.

// let symbolExample_2 = Symbol('id');
// let symbolExample_3 = Symbol('id');


// console.log(symbolExample_2, symbolExample_3)

// console.log(symbolExample_2 === symbolExample_3);   // false
// console.log(symbolExample_2 == symbolExample_3);    // false


// Не варто плутати символи і рядки, це різні типи даних і з символами не вийде
// поводитися так само, як із рядками.

// Спробуємо викликати alert, функція alert автоматично перетворює передане
// їй значення в рядок і виводить його.



// alert(symbolExample_3);
// Uncaught TypeError: Cannot convert a Symbol value to a string

// Отримуємо помилку.


// Для того щоб перетворити в рядок ми можемо використовувати метод toString.

// let symbolExample_4 = Symbol('id').toString();
// alert(symbolExample_4)


// Або звернутися до його опису

// let symbolExample_5 = Symbol('id');
// alert(symbolExample_5.description)


// Символи також можуть допомогти нам створити приховані властивості об'єкта, але ця тема виходить
// за рамки поточного уроку. Поговоримо про це в рамках наступних уроків.
