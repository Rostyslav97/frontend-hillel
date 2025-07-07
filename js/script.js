function getPositiveNumbers(inputArray) {
    if (!Array.isArray(inputArray) || inputArray.length === 0) {
        return "Масив порожній або не є масивом";
    }

    const positiveArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        const currentNumber = inputArray[i];
        if (currentNumber > 0) {
            positiveArray.push(currentNumber);
        }
    }

    if (positiveArray.length > 0) {
        return positiveArray;
    } else {
        return null;
    }
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(getPositiveNumbers(arr));

const emptyTest = [];
console.log(getPositiveNumbers(emptyTest));

const negativeOnly = [-5, -10];
console.log(getPositiveNumbers(negativeOnly));