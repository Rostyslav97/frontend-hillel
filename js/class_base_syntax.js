'use strict';

function Humane() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Humane.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

class User {
    firstName = 'John';
    lastName = 'Doe';

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const instance = new User();
console.log(instance.getFullName());
console.log(instance);

