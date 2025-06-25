'use strict';

let numbersLine = "";
for (let i = 10; i <= 20; i++) {
    numbersLine += i + ", ";
}
console.log("Числа від 10 до 20:", numbersLine);

let squares = "";
for (let i = 10; i <= 20; i++) {
    squares += i * i + ", ";
}
console.log("Квадрати чисел від 10 до 20:", squares);

let multiplicationTable = "";
for (let i = 1; i <= 10; i++) {
    multiplicationTable += `7 * ${i} = ${7 * i}\n`;
}
console.log("Таблиця множення на 7:\n", multiplicationTable);

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log("Сума всіх цілих чисел від 1 до 15:", sum);

let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log("Добуток усіх цілих чисел від 15 до 35:", product);

let count = 0;
let total = 0;
for (let i = 1; i <= 500; i++) {
    count++;
    total += i;
}
let average = total / count;
console.log("Середнє арифметичне всіх цілих чисел від 1 до 500:", average);

let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log("Сума лише парних чисел від 30 до 80:", evenSum);

let multiplesOf3 = "";
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multiplesOf3 += i + ", ";
    }
}
console.log("Числа від 100 до 200 кратні 3:", multiplesOf3);

let number = 36;
console.log("Натуральне число: ", number);
let divisors = "";
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors += i + ", ";
    }
}
console.log("Дільники числа", number + ":", divisors);

let evenDivisorsCount = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisorsCount++;
    }
}
console.log("Кількість парних дільників числа", number + ":", evenDivisorsCount);

let sumOfEvenDivisors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sumOfEvenDivisors += i;
    }
}
console.log("Сума парних дільників числа", number + ":", sumOfEvenDivisors);

let fullTable = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        fullTable += `${i} * ${j} = ${i * j}\n`;
    }
    fullTable += "\n"; // порожній рядок після кожного блоку множника i
}
console.log("Повна таблиця множення від 1 до 10:\n" + fullTable);