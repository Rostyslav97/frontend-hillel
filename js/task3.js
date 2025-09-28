'use strict';

function createMetadataStorage() {
    const weakMap = new WeakMap();

    return {
        setMetadata(obj, metadata) {
            weakMap.set(obj, metadata);
        },
        getMetadata(obj) {
            return weakMap.get(obj);
        },
        hasMetadata(obj) {
            return weakMap.has(obj);
        },
        deleteMetadata(obj) {
            return weakMap.delete(obj);
        }
    };
}

const storage = createMetadataStorage();
const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1));
console.log(storage.hasMetadata(user2));
