'use strict';
/*
    Функція - це JS обʼєкт спеціального типу, в якому ми можемо реалізувати
    певну логіку і перевикористовувати її за допомогою повторних викликів функції.


    Оголошення:

    function імʼяФункції( параметри ) {
        ... тіло функції
    }
*/


function showMessage() {
    let result = 10 ** 2;
    result /= 2;
    result *= 10;
    console.log( 'Всім привіт! ' + result );
}

// console.log(result) // Error

// console.dir(showMessage)
// console.log(typeof showMessage)
showMessage();
// showMessage();
// showMessage();


// let result = 10 ** 2;
// result /= 2;
// result *= 10;
// alert( 'Всім привіт! ' + result );
//
// let result2 = 100 ** 2;
// result2 /= 21;
// result2 *= 1230;
// alert( 'Всім привіт! ' + result2 );
