// String

/*
    string - примітивний тип даних, являє собою ланцюжок елементів, що використовує
    кодування UTF-16, незалежно від кодування, яке використовує сторінка.

    UTF-16 описує можливість зберігання символів unicode за допомогою 16 або 32 бітних
    значень.

    Будь-які текстові дані в JavaScript є рядком, у тому числі й JSON.

    Можемо створювати рядки різними способами:
*/

// Одинарні лапки
const stringExample_1 = 'Hello world #1';

// Подвійні лапки
const stringExample_2 = "Hello world #2";


/*
    Обирати одинарні лапки чи подвійні лапки залежить від того, які символи
    зустрічаються всередині рядка.
*/

console.log('---- String ----');
// Якщо у вашому рядку зустрічаються апострофи або ви просто використовуєте одинарні лапки
// всередині свого рядка і ваш рядок створено також за допомогою одинарних лапок, внутрішні
// лапки потрібно буде екранувати за допомогою зворотного слеша (\).
const stringExample_3 = 'I am \'not\' sentient';


// Аналогічно і з подвійними лапками.
const stringExample_4 = "I am \"not\" sentient";

// Вирішуємо ситуацію простіше, використовуючи один тип лапок всередині іншого.
const stringExample_5 = 'I am "not" sentient';

// console.log(stringExample_3);
// console.log(stringExample_4);
// console.log(stringExample_5);


console.log('---- Back quotes ----');
// Зворотні лапки

/*
    Шаблонні рядки або шаблонні літерали.

    всередині зворотних лапок ми можемо обчислювати якийсь вираз або підставляти
    значення змінної, попередньо обернувши його в ${}, цей функціонал доступний
    тільки при використанні зворотних лапок.
*/

const stringExample_6 = `Hello world #3`;
const stringExample_7 = `Hello world #${2 + 2}`;
const stringExample_71 = "Hello world #" + (2 + 2);
const helloWorldNumber = 5;
const stringExample_8 = `Hello world #${helloWorldNumber}`;

console.log(stringExample_6)
console.log(stringExample_7)
console.log(stringExample_71)
console.log(stringExample_8)

/*
    Важливо!
    Те, що ми передаємо всередину ${}, буде перетворено в рядок.
*/

// Ми можемо домогтися аналогічної поведінки, якщо будемо використовувати оператор '+'
// і одинарні або подвійні лапки. Ця операція називається 'конкатенація рядків'.

const stringExample_9 = 'Hello world #' + 6;
const stringExample_10 = "Hello world #" + 7;

// console.log(stringExample_9)
// console.log(stringExample_10)


console.log('---- String info ----');

// Для того, щоб дізнатися кількість символів у рядку ми можемо звернутися до його
// властивості length

const stringExample_11 = 'Hello world #';
console.log(
    'Довжина строки stringExample_11  - ',
    stringExample_11.length,
    'символів'
);



// Для того, щоб отримати символ із рядка ви можете звернутися до нього за його індексом
// індексування рядків починається з 0 і закінчується кількістю її символів мінус 1.

const stringExample_12 = 'Hello world #9';

console.log(stringExample_12, stringExample_12.length) // 14
const firstChar = stringExample_12[0];
const thirdChar = stringExample_12[2];
const lastChar = stringExample_12[stringExample_12.length - 1];

console.log('Строка - ', stringExample_12);
console.log('Перший символ - ', firstChar);
console.log('Третій символ - ', thirdChar);
console.log('Останній символ - ', lastChar);
//
//
//
console.log('---- String immutability ----');
/*
    Рядки незмінні, це означає, що ви не зможете замінити букву в рядку,
    звернувшись до неї за індексом і присвоївши їй нове значення. Для того, щоб
    змінювати рядок вам потрібно буде використовувати окремі функції та методи.
*/

const stringExample_13 = 'Hello world #10';

// Замінюємо перший символ строки.
stringExample_13[0] = 'Q'; // no

console.log(stringExample_13);      // Строка не змінилася


// Також у рядку ми можемо використовувати unicode символи

console.log('\u{1F60D}')
