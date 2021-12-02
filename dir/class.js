"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const quili = new Person('Quili');
console.log(quili);
quili.greeting();
