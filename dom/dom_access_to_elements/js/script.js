// const div = document.getElementById('my-div');


// HANDLE CLASS NAMES
// document.body.style.backgroundColor = 'pink'


// div.className = 'red';
// div.classList.add('example')
// div.classList.add('example2', 'asdasd')
// div.classList.remove('vova', 'alice')
// div.classList.remove('alice')

// setInterval(() => {
//     div.classList.toggle('red')
// }, 500);

// const listItems = document.getElementsByClassName('list-numerable');
// console.log(listItems)
// console.log(Array.from(listItems))

// for(let i = 0; i <= listItems.length-1; i++) {
//     if(listItems[i].nodeName === 'LI') {
//         listItems[i].innerHTML = 'Item '+ (i + 1);
//     }
// }

// Array.from(listItems).forEach(item => {
//     item.innerHTML = 'hello ass'
// })
//
// console.log(listItems);


// const listItemsAll = document.getElementsByTagName('li');
// console.log(listItemsAll)
// console.log(Array.from(listItemsAll))
//
// const liFromUl = Array.from(listItemsAll).filter((item) => {
//     return item.parentElement.nodeName === 'UL'
// })
//
// console.log(liFromUl);

// for(let i = 0; i <= listItemsAll.length-1; i++) {
//     if(listItemsAll[i].parentElement.nodeName === 'UL') {
//         listItemsAll[i].style.backgroundColor = 'pink';
//         listItemsAll[i].innerHTML += ' - UL'
//     }
//
//     if(listItemsAll[i].parentElement.nodeName === 'OL') {
//         listItemsAll[i].style.backgroundColor = 'red';
//         listItemsAll[i].innerHTML += ' - 0L'
//     }
// }


// const querySelector = document.querySelector('li');
// console.log(querySelector)


// const querySelectorAll = document.querySelectorAll('li')
// console.log(querySelectorAll)


// const querySelectorAll2 = document.querySelectorAll('[data-custom]');
// console.log(querySelectorAll2)


const querySelectorAll3 = document.querySelectorAll('ol li:nth-child(even)');
console.log(querySelectorAll3)
