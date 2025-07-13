// Добавляет элементы в начало массива и возвращает длинну масива
let arr = [1, 2, 3, 4, 5, 6];


const unshift = (arr, ...els) => {
    if(els.length === 0) return  arr.length;

    const offset = els.length; // кількість елементів для відступу в масиві arr

    for(let i = arr.length - 1; i >= 0; i--) {
        // console.log(`index: ${i}, value: ${arr[i]}, offset: ${offset}`)
        console.log(arr);
        arr[i + offset] = arr[i];
        arr[i] = 'empty value' // для прикладу тільки - можна видалити.
    }

    // console.log(els)

    for(let i = 0; i < els.length; i++) {
        console.log(arr)
        arr[i] = els[i]
    }


    return arr.length;
}

unshift(arr, 10, 11)
console.log(arr)

//
// let arr2 = [1, 2, 3, 4, 5, 6];
// let arr2 = [1, 1, 3, 4, 5, 6];
// let arr2 = [1, 1, 1, 4, 5, 6];

// let arr2 = [, 1, 2, 3, 4, 5, 6];
