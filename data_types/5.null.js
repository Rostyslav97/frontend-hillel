// Null

/*
   null - примітивний тип даних, зазвичай являє собою відсутність будь-якого значення
   в об'єкті. Про об'єкти поговоримо пізніше.

   Для того щоб створити null, ми можемо присвоїти значення null у змінну або властивість
   об'єкта.
*/


let nullExample_1 = null;


// Фігурні дужки використовуються для створення об'єкта.
let nullInObjectExample = {
    firstName: null,
    lastName: null,
    age: 10
};


console.log(nullExample_1);
console.log(nullInObjectExample);

/*
    Відмінність null від undefined

    null є визначеним значенням відсутності об'єкта або відсутності значення
    для якого всередині об'єкта визначено ключ.

    undefined позначає невизначеність, а саме те, що контейнер було створено, але
    його значення не визначили або властивість не було визначено зовсім.
 */


// Баг оператора typeof

// Якщо ми використовуємо typeof для перевірки типу даних null ми отримаємо object

console.log(
    typeof null // object ()
)

// Для перевірки того, що значення дійсно null, робимо так:

const anotherNullVariable = null;

if(anotherNullVariable === null) {
    console.log(123)
}
