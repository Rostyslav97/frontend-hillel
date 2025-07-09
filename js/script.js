'use strict';

function findValuesByKey(obj, targetKey) {
    const results = [];

    function recurse(value) {
        if (Array.isArray(value)) {
            for (const item of value) {
                recurse(item);
            }
        } else if (value !== null && typeof value === "object") {
            for (const key in value) {
                if (key === targetKey) {
                    results.push(value[key]);
                }
                recurse(value[key]);
            }
        }
    }

    recurse(obj);
    return results;
}


const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

console.log(findValuesByKey(data, "id"));
