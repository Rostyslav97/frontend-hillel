'use strict';

// Map - Пари ключ і значення:
// Ключ: будь-який тип даних,
// Значення: будь-який тип даних

const men = {
    name: 'John',
    email: 'john@email.com',
    password: 'password',
    id: 1
}
const manChilds = [
    {name: 'Child1', id: 2},
    {name: 'Child2', id: 3},
    {name: 'Child3', id: 4},
    {name: 'Child3', id: 5},
]

const connection = {
    fatherId: 1,
    childIds: [2, 3, 4, 5]
}


const women = {
    name: 'Vi',
    email: 'john@email.com',
    password: 'password',
}
const womenChilds = [
    {name: 'Child1'},
    {name: 'Child2'},
]
const exampleMap = new Map();


exampleMap.set(men, manChilds);
// exampleMap.set(women, womenChilds);

console.log(exampleMap)
// console.log(exampleMap.get(men));

class OurMap {
    #currentIndex = 0;
    size = 0;
    set(providedKey, providedValue) {
        this[this.#currentIndex] = {
            key: providedKey,
            value: providedValue
        }
        this.size += 1;
        this.#currentIndex += 1;
    }
    get(key) {
        for (let i = 0; i < this.size; i++) {
            if(this[i].key === key){
                return this[i].value
            }
        }
    }
}

const oMap = new OurMap();
oMap.set(women, womenChilds);
oMap.set(20, 'value');
oMap.set('Alice', {
    marks: [1, 2, 3, 4, 5],
    attendance: [true, true, false, false, true]
});

console.log(oMap)
console.log(oMap.get(women));
console.log(oMap.get(20));
console.log(oMap.get('Alice'));