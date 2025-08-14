// Объект document – основная «входная точка».
// С его помощью мы можем что-то создавать или менять на странице


// console.log( document.body );
// //
// document.body.style.backgroundColor = 'white'
// //
// setInterval(() => {
//
//     if(document.body.style.backgroundColor === 'white') {
//         document.body.style.backgroundColor = 'pink'
//     } else {
//         document.body.style.backgroundColor = 'white'
//     }
//
//
// }, 1000);


// Берем элемент по id
const div = document.getElementById('demo');
console.log(div)
div.style.color = 'blue';
div.style.fontSize = '20px';
