const input = document.body.childNodes[1];

console.log(input)


// для стандартных аттрибутов html мы можем получать их
// значения через . как будто через объект

// console.log(input.type); // text
// console.log(document.body.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное

// Для нестандартных аттрибутов нужно использовать отдельные методы

// elem.hasAttribute(name) - проверяет наличие атрибута.

// console.log(input.hasAttribute('dogName'));
// console.log(input.hasAttribute('type'));


// elem.getAttribute(name) – получает значение атрибута.
// const atr = input.getAttribute('data-custom-attribute')
// console.log(atr);
// console.log(input.getAttribute('dogName'));


// elem.setAttribute(name, value) – устанавливает значение атрибута.

// setTimeout( () => {

    // input.setAttribute('data-my-another-attribute', 'Smell like new attribute')
    // console.log(input.getAttribute('data-my-another-attribute'));




// }, 2000)


// const str = 'Hello World'
// let i = 0;
// const intId = setInterval(() => {
//     input.value += str[i];
//     i++;
//
//     if(i >= str.length) clearInterval(intId);
// }, 250)


// elem.removeAttribute(name) – удаляет атрибут.
// console.log(input.getAttribute('data-custom-attribute'));
// input.removeAttribute('data-custom-attribute')
// console.log(input.getAttribute('data-custom-attribute'));

//  Достать все аттрибуты html элемента как коллекцию
// console.log(input.attributes);
//
// можем перебрать их циклом
// for(let attr of input.attributes) {
//     console.log(attr)
//     console.log(attr.name, attr.value)
//     console.log('--------------------')
// }
