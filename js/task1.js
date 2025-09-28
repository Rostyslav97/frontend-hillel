'use strict';

function groupByCategory(items) {
    const map = new Map();
    for (const item of items) {
        const category = item.category;
        if (!map.has(category)) {
            map.set(category, []);
        }
        map.get(category).push(item);
    }
    return map;
}

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];

console.log(groupByCategory(items));
