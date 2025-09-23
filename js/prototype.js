// https://learn.javascript.info/function-prototype

// Ми знаємо, що нові об’єкти можуть бути створені з використанням
// функції-конструктора new Function().

/* Коли ви створюєте об’єкт через new Constructor(...), відбувається таке:
1. Створюється порожній об’єкт і його внутрішній [[Prototype]] встановлюється у значення Constructor.prototype.
2. Викликається сама функція‑конструктор з this, що посилається на цей новий об’єкт.
3. Якщо конструктор не повернув явно іншого об’єкта, результатом виразу new стає this.
*/

function Rabbit(name) {
    this.name = name;

    // this.talk = function () {
    //     console.log("Привіт, мене звати " + this.name);
    // }
}

Rabbit.prototype.getVoice = function () {
    console.log(`Hello ${this.name}!`)
}

const rabbit1 = new Rabbit('Vova');
const rabbit2 = new Rabbit('Alice');




console.log(rabbit1, rabbit2);
console.log(rabbit1.getVoice === rabbit2.getVoice); // true
console.log(rabbit1.prototype === rabbit2.prototype); // true

rabbit1.getVoice()
rabbit2.getVoice()

