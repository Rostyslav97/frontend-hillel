'use strict';

const birthYear = prompt("Введіть рік народження:");
const city = prompt("У якому місті ви живете?");
const sport = prompt("Ваш улюблений вид спорту?");

const missing = [];

if (!birthYear) missing.push("рік народження");
if (!city) missing.push("місто");
if (!sport) missing.push("улюблений вид спорту");

if (missing.length > 0) {
    alert("Шкода, що Ви не захотіли ввести " + missing.join(", ") + ".");
} else {

    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(birthYear);

    let cityMessage;
    switch (city.trim().toLowerCase()) {
        case 'київ':
            cityMessage = "Ти живеш у столиці України.";
            break;
        case 'вашингтон':
            cityMessage = "Ти живеш у столиці США.";
            break;
        case 'лондон':
            cityMessage = "Ти живеш у столиці Великої Британії.";
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}.`;
    }

    let sportMessage;
    const lowerSport = sport.trim().toLowerCase();

    if (lowerSport === "футбол") {
        sportMessage = "Круто! Хочеш стати як Сергій Ребров?";
    } else if (lowerSport === "бокс") {
        sportMessage = "Круто! Хочеш стати як Володимир Кличко?";
    } else if (lowerSport === "теніс") {
        sportMessage = "Круто! Хочеш стати як Еліна Світоліна?";
    } else {
        sportMessage = `Цікавий вибір спорту — ${sport}.`;
    }

    alert(`Тобі ${age} років.\n${cityMessage}\n${sportMessage}`);
}
