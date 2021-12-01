"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hasValue = true;
let count = 11;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Smith',
        last: 'Row'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const book = ['bussiness', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["Short"] = "short";
    CoffeeSize["Tall"] = "Tall";
    CoffeeSize["Grande"] = "Grande";
    CoffeeSize["Venti"] = "Venti";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.Tall
};
console.log(CoffeeSize.Short);
let unionType = 10;
unionType = 'hello';
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'large'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello());
let tmp;
const anotherAdd = add;
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
