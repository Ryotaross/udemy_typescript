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
