'use strict';

/*
* constructor () {} = спеціальна функція в котрої ми описуємо що повинно відбуватись
* під час виклику класу через new
* * */


class User {
    constructor(name, age) {
        console.log(`Hello ${name} you are a Dog`)
    }
}

const user = new User('Vova', 27);




class Cat {
    // public properties
    name = null;
    age = null;
    owner = null;
    furColor = null;

    constructor(name, age, owner, furColor) {
        this.name = name;
        this.age = age;
        this.owner = owner;
        this.furColor = furColor;
    }
}


const cat = new Cat("Вася", 2, 'Vova', '#000')
console.log(cat);