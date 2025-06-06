// Typeof

// Оператор typeof повертає рядок, що вказує тип операнда.

const num = 10;
const bigNum = 10n;
const str = 'string';
const undef = undefined;
const nullVar = null;
const boolVar = true;
const symbolVar = Symbol('symbol');



console.log('num', typeof num);
console.log('bigNum', typeof bigNum);
console.log('str', typeof str);
console.log('undef', typeof undef);
console.log('nullVar', typeof nullVar);      // тут баг, object
console.log('boolVar', typeof boolVar);
console.log('symbolVar', typeof symbolVar);



console.log('======================');
// Object

const obj = {
    name: 'John',
    age: 20
}

const arr = [10, 20, 30];

console.log('obj', typeof obj);
console.log('arr', typeof arr);



console.log('======================');
// Function

function sum(a, b) {
    return a + b;
}

console.log('sum', typeof sum);

// Не дивлячись на те що оператор typeof показує що там функції це function
// функція в будь-якому разі належить до типу даних object. Це зроблено спеціально
// щоб нам було зручно розрізняти де функції, а де об'єкти.


// Так typeof можна використовувати як функцію typeof(значення, що перевіряється_).