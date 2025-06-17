'use strict';

const hours = prompt("Введіть кількість годин:");
if (hours === null || hours.trim() === "") {
    alert("Ви не ввели кількість годин.");
} else if (isNaN(hours)) {
    alert("Будь ласка, введіть коректне число.");
} else {
    const seconds = Number(hours) * 3600;
    alert(`${hours} годин = ${seconds} секунд.`);
}
