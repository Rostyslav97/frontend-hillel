'use strict';

/*
* public = Та властивість або метод котра доступна в екземплярі класу
* private = Та властивість або метод котра НЕ доступна в екземплярі класу, не спадкується
* protected (не існує в JS) = Властивість яка спадкується але не доступна в екземплярі класу
* static = Властивість  або метод яка доступна тільки з самого класу, а не з екземпляру

* constructor () {} = спеціальна функція в котрої ми описуємо що повинно відбуватись
* під час виклику класу через new
* * */

class Cat {
    static catsCount = 0

    // public properties
    name = null;
    age = null;
    owner = null;
    furColor = null;

    // Private
    #hitPoints = 9;

    // Protected
    _breed = 'metis';


    constructor(name, age, owner, furColor) {
        this.name = name;
        this.age = age;
        this.owner = owner;
        this.furColor = furColor;
        Cat.catsCount += 1
    }

    getHitPoints() {
        return this.#hitPoints
    }
    takeDamage() {
        this.#hitPoints -= 1;
    }

    static isCat(potentiallyCat) {
        return potentiallyCat instanceof Cat
    }

}

const user = {firstName: 'John', lastName: 'Doe'}

if (!Cat.isCat(user)) {
    console.log('not cat');
}

const cat = new Cat("Вася", 2, 'Vova', '#000')
const cat2 = new Cat("Вася", 2, 'Vova', '#000')
const cat3 = new Cat("Вася", 2, 'Vova', '#000')
const cat4 = new Cat("Вася", 2, 'Vova', '#000')
cat.name = 'Bobic'
cat.hitPoints = 'Hello dirty animal'
console.log(cat._breed); // отримувати доступ до protected властивостей ззовні класів не можна!


// cat.#hitPoints = 123123
console.log(cat.getHitPoints())
cat.takeDamage()
console.log(cat)
console.log(Cat.catsCount)


const arr = [1, 2, 3];


if(Array.isArray(arr)) {
    console.log(arr.toString())
}
