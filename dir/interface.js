"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'ryo',
    nickName: 'RYOTARO'
};
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message = 'Hello') {
        console.log('Hello');
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = tmpDeveloper;
