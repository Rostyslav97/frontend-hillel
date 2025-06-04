let userName = prompt("Як Вас звати?");

let userAge = Number(prompt("Скільки Вам років?"));

let userConsent = confirm("Ви погоджуєтесь брати участь?");

const userId = 12345678901234567890n;

let bonusCode = null;

let secondName;

alert(
    `Привіт, ${userName}!\n` +
    `Твій вік: ${userAge}\n` +
    `Твій статус: ${userConsent ? "участь підтверджено" : "відмовився"}`
);

console.log("Name:", userName, typeof userName);
console.log("Age:", userAge, typeof userAge);
console.log("Consent:", userConsent, typeof userConsent);
console.log("User ID:", userId, typeof userId);
console.log("Bonus Code:", bonusCode, typeof bonusCode);
console.log("Second Name:", secondName, typeof secondName);
