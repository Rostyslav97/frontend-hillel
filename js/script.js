'use strict';

function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) return null;

    return sum / count;
}

console.log(averageOfNumbers([1, "test", 3, true, 5, null]));




function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y !== 0 ? x / y : "Ділення на нуль неможливе";
        case '%':
            return y !== 0 ? x % y : "Ділення на нуль неможливе";
        case '^':
            return Math.pow(x, y);
        default:
            return "Невідомий оператор";
    }
}

const x = Number(prompt("Введіть число x:"));
const znak = prompt("Введіть оператор (+, -, *, /, %, ^):");
const y = Number(prompt("Введіть число y:"));

console.log(doMath(x, znak, y));




function create2DArray() {
    const rows = Number(prompt("Введіть кількість рядків:"));
    const cols = Number(prompt("Введіть кількість стовпців:"));
    const arr = [];

    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = prompt(`Введіть значення для елемента [${i}][${j}]:`);
        }
    }
    return arr;
}

const userArray = create2DArray();
console.log(userArray);




function removeCharsUserInput() {
    const inputStr = prompt("Введіть рядок:");
    const charsStr = prompt("Введіть символи для видалення через кому:");

    const charsToRemove = charsStr.split(',').map(char => char.trim());

    let result = "";

    for (let i = 0; i < inputStr.length; i++) {
        if (!charsToRemove.includes(inputStr[i])) {
            result += inputStr[i];
        }
    }

    return result;
}

console.log(removeCharsUserInput());