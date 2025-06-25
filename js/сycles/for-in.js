'use strict';
// example 1

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
}

// Масив ключів обєкту user
const userKeysArr = Object.keys(user);

// Перебираємо масив ключів
// const key зберігає окремий ключ із масиву userKeysArr
for(const key of userKeysArr) {
    console.log(user[key])
}

for (const key in user) {
    console.log(key, user[key])
}


// const userKeys = ["id", "name", "username", "email", "phone", "website"]

// for(const key in user) {
//     console.log(`${ key }: ${ user[key] }`)
// }
