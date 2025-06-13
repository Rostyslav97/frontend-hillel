'use strict';

let user = {
    name: "John",
    age: 30,
    isOnline: true,
    friends: ["Alice", "Bob", "Eve"],
    settings: {
        theme: "dark",
        notifications: true
    }
};

let firstFriendName = user.friends[0];
let notificationsEnabled = user.settings.notifications;

console.log("Ім’я користувача:", user.name);
console.log("Кількість друзів:", user.friends.length);
console.log("Ім’я першого друга:", firstFriendName);
console.log("Яка тема увімкнена:", user.settings.theme);
console.log("Чи ввімкнені сповіщення:", notificationsEnabled);
