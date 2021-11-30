"use strict";
exports.__esModule = true;
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Smith',
        last: 'Row'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['bussiness', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["Short"] = "short";
    CoffeeSize["Tall"] = "Tall";
    CoffeeSize["Grande"] = "Grande";
    CoffeeSize["Venti"] = "Venti";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.Tall
};
console.log(CoffeeSize.Short);
var unionType = 10;
unionType = 'hello';
var apple = 'apple';
var clothSize = 'large';
var cloth = {
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
var tmp;
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error!'));
