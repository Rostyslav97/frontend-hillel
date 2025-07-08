'use strict';

const getFullName = function (prefix = '', suffix = '') {
    // console.log(this)
    return `${prefix} ${this.firstName} ${this.lastName} ${suffix}`;
}

const user = {
    firstName: 'John',
    lastName: 'Pes',
}


const student = {
    firstName: 'Alex',
    lastName: 'Doe',
}


const human = {
    firstName: 'Ann',
    lastName: 'J.',
}

const users = [user, student, human];

console.log('+++ APPLY +++')
// apply
users.forEach((item) => {
    console.log(
        getFullName.apply(item, ['MR.', 'suffix'])
    )
})

console.log('+++ CALL +++')

// call
users.forEach((item) => {
    console.log(
        getFullName.call(item, 'MR.', '... PS. hello js')
    )
})

console.log('+++ BIND +++')
// bind

const bindedUserFunc = getFullName.bind(user, 'Mrs', 'ss');
// console.log(bindedUserFunc.apply(human)); // not working
console.log(bindedUserFunc('---------'))


console.log('+++ ARROW FUNC +++')
// arrow func
const getFNameArrow = (prefix = '', suffix = '') => {
    console.log(this)
    return `${prefix} ${this.firstName} ${this.lastName} ${suffix}`;
}
console.log(getFNameArrow.apply(user, ['MR.', 'suffix']));
console.log(getFNameArrow.call(user, 'MR.', 'suffix'));
console.log(getFNameArrow());