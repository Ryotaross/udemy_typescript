"use strict";
var _a, _b, _c;
const quill = {
    name: 'Quill',
    role: 'front',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('fluter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
const input = document.getElementById('input');
input.value = 'initial input value';
document.getElementById('input').value = 'initial input value';
const desinner = {
    name: 'ryo',
    role: 'web'
};
const downloadData = {
    id: 1
};
console.log((_b = (_a = downloadData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadData.user) !== null && _c !== void 0 ? _c : 'no-user';
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 6;
    }
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
