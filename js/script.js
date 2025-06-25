'use strict';

let result1 = "";
for (let i = 20; i <= 30; i += 0.5) {
    result1 += i + " ";
}
console.log("Числа від 20 до 30 з кроком 0.5:", result1);

const rate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(`${dollars} USD = ${dollars * rate} UAH`);
}

let number = 1000;
console.log("Ціле число:", number);
let result3 = "";
for (let i = 1; i <= 100; i++) {
    result3 += (i * i <= number ? i + " " : "");
}
console.log(`Числа, квадрат яких не перевищує ${number}:`, result3);

let number1 = 37;
console.log("Ціле число:", number1);
let isPrime = number1 > 1;
for (let i = 2; i * i <= number1; i++) {
    if (number1 % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${number1} є ${isPrime ? "простим числом" : "непростим числом"}`);

let number2 = 81;
console.log("Ціле число:", number);
let power = 1;
let found = false;
while (power <= number2) {
    found = (power === number2) ? true : found;
    power *= 3;
}
console.log(`${number2} ${found ? "можна" : "не можна"} отримати як 3^n`);
