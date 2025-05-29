let userName = prompt("Введіть ваше ім’я:");
let wantsGreeting = confirm("Хочете побачити привітання?");
if (userName && wantsGreeting) {
    alert("Привіт, " + userName + "!");
}