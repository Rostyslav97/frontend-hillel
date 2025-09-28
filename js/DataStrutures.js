'use strict';

// 1. Масив - індексована структура, з суворим порядком.

const arr = [
    'Alex', 'Alice', 'John'
]

// 2. Object - Пари ключів і значень - Ключ: string, Значення: any type.
// Не має певного порядку, сортується за алфавітом.

const obj = {
    name: 'Alex',
    surname: 'Shaitan',
}

// 3. Stack - ArrayLike data structure

// LIFO - last in first out
const names = ['Alex', 'Jane', 'Antony'];
names.push('Boris');
names.pop();

// FIFO - first in first out
const surnames = ['Alex', 'Jane', 'Antony'];
surnames.unshift('Boris')
surnames.shift()


// 4. Linked list - Кожен елемент списку знає про свого наступного елемента.
// Це не індексована структура

const numbers = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

// 5. Tree data structure - структура даних, яка складається з вузлів (вершин)
// і ребер, без будь-яких циклів. Дерево без вузлів називається нульовим або
// порожнім деревом. Дерево, яке не є порожнім, складається з кореневого вузла і
// багатьох рівнів додаткових вузлів, які утворюють ієрархію.


// 6. Map - Пари ключ і значення - Ключ: будь-який тип даних, а значення
// будь який тип даних

// 7. Set - ArrayLike колекція унікальних значень

// 8. WeakMap - Map зі слабкими зв'язками (тільки об'єкти)
// 9. WeakSet - Set зі слабкими зв'язками (тільки об'єкти)
