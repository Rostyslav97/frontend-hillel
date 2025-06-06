// Boolean

/*
    boolean - є примітивними типом даних, який може приймати одне з 2х
    значень true або false.

    Зазвичай використовується для того, щоб визначити які шматки коду потрібно виконувати
    всередині конструкцій умовного розгалуження.

    Також є група функцій, які повертають тільки boolean значення, такі функції
    називаються 'Функції предикати'.
*/



// Задаємо явно
const booleanExample_1 = true;
const booleanExample_2 = false;


console.log('Змінні boolean ', booleanExample_1, booleanExample_2);




// if є однією з конструкцій умовного розгалуження, докладніше поговоримо про нього
// на наступних уроках.

if(booleanExample_1) {

    console.log(`Виконуємо цю умову якщо booleanExample_1 зберігає значення true`);

} else {

    console.log(`Виконуємо цю умову якщо booleanExample_1 зберігає значення false`);

}



// Функція предикат
// У подальших уроках розглянемо функції докладніше

// Функція, що перевіряє чи парне число
function isEven(foo) {
    return foo % 2 === 0;
}

const booleanExample_4 = isEven(10);

console.log('Функція предикат', booleanExample_4)
