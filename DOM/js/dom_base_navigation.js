// Дочерние элементы (или дети) – элементы, которые лежат непосредственно
// внутри данного. Например, внутри <HTML> обычно лежат <HEAD> и <BODY>.

// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми,
// детьми их детей и так далее. То есть, всё поддерево DOM.

let bodyEl = document.body;
// bodyEl.style.backgroundColor = 'pink'

// childNodes,
let bodyChilds = bodyEl.childNodes;
// console.log(bodyChilds)
// const ul = bodyChilds[3];
// console.log(ul.childNodes);
// const li = ul.childNodes[1];
// console.log(li.childNodes)


// firstChild
// console.log(bodyEl.firstChild)
// console.log(bodyEl.firstElementChild)
// console.log(bodyEl.firstElementChild.style.backgroundColor = 'red')

// lastChild
// console.log(bodyEl.lastChild)
// console.log(bodyEl.lastElementChild)


// siblings
let ul = bodyChilds[3];
console.log(ul)

// previousElementSibling
// console.log(ul.previousElementSibling)

// // nextElementSibling
// console.log(ul.nextElementSibling)

// parentElement
console.log(ul.parentElement)


// Для перебора подходят как обычные циклы так и for..of

// console.log(bodyChilds)
// const arr = []
// for(let i = 0; i < bodyChilds.length; i++) {
//     if(bodyChilds[i] instanceof HTMLElement) {
//         arr.push(bodyChilds[i]);
//     }
// }
//
// console.log(arr)


// for..of

// console.log(bodyChilds)
// const arr2 = []
//
// for(const element of bodyChilds) {
//     if(element instanceof HTMLElement) {
//         arr2.push(element);
//     }
// }
// console.log(arr2)

// Массивы из коллекций - для работы с коллекцией
// элементов как с массивом данных

// console.log(bodyChilds);
// let arr = Array.from(bodyChilds);
//
// console.log(arr)
