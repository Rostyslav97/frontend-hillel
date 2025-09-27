'use strict';
class Animal {
    name = null;
    age = null;
    hasTail = true;
    isSterilized = false;
    speed = 0;
    animalType = null

    constructor(name, age, hasTail, isSterilized, animalType) {
        this.name = name;
        this.age = age;
        this.hasTail = hasTail;
        this.isSterilized = isSterilized;
        this.animalType = animalType
    }

    run() {
        this.speed = 10;
        console.log(`${this.animalType} runs`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.animalType} stopped`)
    }
}
