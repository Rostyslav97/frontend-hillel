'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositive = 0;
let countPositive = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let countNegative = 0;
let countOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productPositive = 1;

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el > 0) {
        sumPositive += el;
        countPositive++;

        if (el % 2 === 0) {
            countEvenPositive++;
            sumEvenPositive += el;
        } else {
            countOddPositive++;
            sumOddPositive += el;
        }

        productPositive *= el;
    } else {
        countNegative++;
    }

    if (el < min) {
        min = el;
        minIndex = i;
    }

    if (el > max) {
        max = el;
        maxIndex = i;
    }
}

const onlyMaxArray = arr.map((val, i) => i === maxIndex ? val : 0);


console.log("Сума позитивних:", sumPositive);
console.log("Кількість позитивних:", countPositive);
console.log("Мінімальний елемент:", min, "Індекс:", minIndex);
console.log("Максимальний елемент:", max, "Індекс:", maxIndex);
console.log("Кількість негативних:", countNegative);
console.log("Кількість непарних позитивних:", countOddPositive);
console.log("Кількість парних позитивних:", countEvenPositive);
console.log("Сума парних позитивних:", sumEvenPositive);
console.log("Сума непарних позитивних:", sumOddPositive);
console.log("Добуток позитивних:", productPositive);
console.log("Масив лише з max:", onlyMaxArray);
