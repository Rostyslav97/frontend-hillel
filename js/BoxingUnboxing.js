'use strict';

const str = 'John Doe';       // primitive data type
console.log(str.toLowerCase());     //  'john doe'


// Коли ми викликаємо метод з примітиву відбувається обгортання (boxing)
// примітивного значення в обєктну обгортку класу String з
// якого викликаються методи або властивості, після чого відбувається
// розгортання (unboxing)
