// Функції

// Функції - це ділянки коду які можна перевикористовувати, в цьому уроці ми не будемо
// їх розглядати детально.

// Для створення функції існує кілька способів ключове слово function і стрілочний
// синтаксис

const user = {
    name: 'User',
    age: 10
}
function foo(a, b) {
    if(typeof a !== 'number') throw new Error('a is not a number');
    if(typeof b !== 'number') throw new Error('b is not a number');
    return a + b;
}

// console.log(typeof user)
// console.log(typeof foo)
// console.log(typeof null)

// const c = foo(10, 20)
// const v = foo(20, 90)
// console.log(c, v)
//
// const bar = (a, b) => {
//     return a - b;
// }

// console.dir(foo)


// Функції також є об'єктами і належать до типу даних object.

