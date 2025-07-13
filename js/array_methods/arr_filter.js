// Метод filter применяет функцию коллбек которая применяется к каждому элементу массива
// если функция возвращает true то элемент будет добавлен в массив результатов

// let results = arr.filter(function(item, index, array) {
//     если true - элемент добавляется к результату, и перебор продолжается
//     возвращается пустой массив в случае, если ничего не найдено
// });

let users = [
    {id: 1, name: "Вася", gender: 'male', age: 21},
    {id: 2, name: "Петя", gender: 'male', age: 17},
    {id: 3, name: "Маша", gender: 'female', age: 33}
];

const filteredUsers = users.filter((item) => {
    return item.age > 18;
})

console.log(filteredUsers)
