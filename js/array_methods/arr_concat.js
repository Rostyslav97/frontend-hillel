// Метод arr.concat создаёт новый массив, в который копирует
// данные из других массивов и дополнительные значения.

const arr1 = ['Vova', 'Alex', 'Petro'];
const arr2 = ['Ann', 'Alice', 'Julia'];
const arr3 = ['Huan', 'Joel', 'Ellie']

const result = arr1.concat(arr2, arr3, 10, 'Vova')

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(result)

// const result2 = [...arr1, ...arr2, ...arr3, 10, 20, 30];
// console.log(result2)


const concat = (...values) => {
    console.log(values)
    const result = [];

    for(let i = 0; i < values.length; i++) {
        // Якщо не масив то пушимо в резалт
        if(!Array.isArray(values[i])) {
            result[result.length] = values[i]
        } else {
            // Якщо масив то обробляємо окремо
            const vals = values[i];

            for(let c = 0; c < vals.length; c++) {
                result[result.length] = vals[c];
            }
        }
    }

    return result;
}

console.log(concat('Sobaka', arr1, 'Kot', arr2, arr3, 'ooo', 'aaa', 10, null, {name: 'Vova'}));
