'use strict';

const name = prompt("Як вас звати?");
const age = Number(prompt("Скільки вам років?"));
const wantsNotifications = confirm("Хочете отримувати сповіщення?");

const userId = 1234567890123456789n;
const lastLogin = null;
let nickname;
const favoriteTech = ["JavaScript", "Python", "Docker"];
const settings = {
    theme: "dark",
    autoLogin: false
};

const session = {
    name,
    age,
    wantsNotifications,
    userId,
    lastLogin,
    nickname,
    favoriteTech,
    settings
};

alert(`Привіт, ${name}! Ваш ID: ${userId}`);

console.log("session:", session);

console.log("name:", typeof session.name);
console.log("age:", typeof session.age);
console.log("wantsNotifications:", typeof session.wantsNotifications);
console.log("userId:", typeof session.userId);
console.log("lastLogin:", typeof session.lastLogin);
console.log("nickname:", typeof session.nickname);
console.log("favoriteTech:", typeof session.favoriteTech);
console.log("settings:", typeof session.settings);
