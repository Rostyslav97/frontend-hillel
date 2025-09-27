'use strict';


class Cat {
    name = null;
    age = null;
    hasTail = true;
    isSterilized = false;
    #owner = null;

    constructor(name, age, hasTail, isSterilized) {
        this.name = name;
        this.age = age;
        this.hasTail = hasTail;
        this.isSterilized = isSterilized;
    }

    setOwner(owner) {
        this.#owner = owner
    }
}

class Dog {
    name = null;
    age = null;
    hasTail = true;
    isSterilized = false;
    #owner = null;

    constructor(name, age, hasTail, isSterilized) {
        this.name = name;
        this.age = age;
        this.hasTail = hasTail;
        this.isSterilized = isSterilized;
    }

    setOwner(owner) {
        this.#owner = owner
    }
}

console.log( new Cat('Vova', 28, true, true))