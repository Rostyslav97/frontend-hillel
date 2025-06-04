// bigint

/*
    bigint - числовий примітивный тип даних в JavaScript, дозволяючий працювати з
    числами довільної точності. Проблема в тому, що тип даних Number може
    зберігати числа тільки в певному діапазоні.
*/

const biggestNumber = Number.MAX_SAFE_INTEGER;
//
// console.log(biggestNumber);
// console.log(biggestNumber + 1);
// console.log(biggestNumber + 2);
// console.log(biggestNumber + 3);


console.log('---- BigInt Examples ----');
/*
    Якщо ми будемо збільшувати це число на Number не зможе точно зберегти результат.
    BigInt дозволяє нам зберігати числа за межами максимального цілочисельного значення
    Number.

    Створити BigInt можна наступним чином:
*/

// const bigIntExample_1 = 100n;
// const bigIntExample_2 = BigInt(100);
//
// console.log(bigIntExample_1, bigIntExample_2);

// Просто додаємо суфікс 'n' у кінці літералу числа або використовуємо функцію BigInt()
// Тепер спробуємо повторити перший приклад тільки вже з використанням BigInt


// const bigIntNumber = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(bigIntNumber);
// console.log(bigIntNumber + 1n);
// console.log(bigIntNumber + 2n);
// console.log(bigIntNumber + 3n);


// Як бачимо, все працює правильно.

console.log('---- BigInt Notation ----');
// Аналогічно, як і з типом даних Number, ми можемо розділяти великі числа через '_'.

const bigIntExample_3 = 1_000_000_000_000_000n;
console.log(bigIntExample_3);


console.log('---- BigInt vs Number ----');

// Якщо ми будемо порівнювати BigInt з Number через '===', то при однакових значеннях
// отримаємо false, так як це різні типи даних.

const bigIntExample_4 = 10n;
const numberExample_1 = 10;

console.log(bigIntExample_4 === numberExample_1);

// У такому разі ми можемо використати оператор '==', тоді порівняння пройде успішно.
// Так як '==' порівнює тільки значення без приведення типів.

// console.log(bigIntExample_4 == numberExample_1);
