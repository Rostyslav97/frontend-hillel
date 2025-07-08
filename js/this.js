'use strict';

// console.log(this) // window


function foo() {
    console.log(this) // undefined
}
// foo();

function bar() {
    console.log(this) // window
}
// window.bar();


const user = {
    firstName: 'Alex',
    lastName: 'Doe',
    getFullName() { // getFullName: function() {... code here}
        console.log(this) // user
        return this.firstName + ' ' + this.lastName;
    }
}

// user.getFullName(); // Alex Doe

const humane = {
gender: 'Male',
    birthYear: 1990,
    getAge() {

    const getCurrenYear = function () {
        console.log(this) // undefined
        return new Date().getFullYear();
    }

    const currentYear = getCurrenYear()

    return currentYear - this.birthYear;
}
}

// humane.getAge() // 35


const student = {
    course: 'Front-end Pro',
    lesson: 11,
    allLessons: 38,
    courseDuration: 12,
    coursePrice: 20000,
    _rawCalculation: null,
    _roundedCalculation: null,
    calculateMonthlyPayment() {
        this._rawCalculation =  this.coursePrice / this.courseDuration;

        const roundNumber = () => {
            // console.log(this)
            this._roundedCalculation = Number(this._rawCalculation.toFixed(2));
        }

        roundNumber();

        return {
            rawSum: this._rawCalculation,
            roundedSum: this._roundedCalculation ,
        }
    }
}
console.log(student.calculateMonthlyPayment())