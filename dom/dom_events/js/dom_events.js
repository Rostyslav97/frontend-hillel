// function countRabbits() {
//     for(let i=1; i<=3; i++) {
//         console.log("Кролик номер " + i);
//     }
// }

// const btn = document.querySelector('[data-btn-click-me]');
//
// btn.onclick = function() {
//     alert('Спасибо');
// };
//
// btn.onclick = function(event) {
//     console.log(event);
//     console.log(event.target);
// };


const btnToolbar = document.querySelector('[data-btn-toolbar]')
//
// console.log(btnToolbar)
//
// btnToolbar.onclick = (evt) => {
//     console.log(evt.target)
// }
//
// btnToolbar.onclick = (evt) => {
//     console.log(123)
// }

const eventHandler = (event) => {
    if(event.target.nodeName !== 'BUTTON') return;
    console.log('Загальна функція для натискання на кнопку', event.target);
}

//
const anotherHandler = (event) => {
    switch (event.target.name) {
        case 'add-btn':
            console.log('Adding new entity')
            break;
        case 'remove-btn':
            console.log('Remove entity');

            break;
        case 'edit-btn':
            console.log('Edit entity')
            break;
        default:
            btnToolbar.removeEventListener('click', eventHandler)
            console.log('Dont know what to do!')
    }
}

btnToolbar.addEventListener('click', eventHandler)
btnToolbar.addEventListener('click', anotherHandler)

