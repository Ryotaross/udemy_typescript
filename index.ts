import { NumberTypeAnnotation } from "@babel/types";

let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello:string;
hello = 'hello';

const person = {
  name : {
    first: 'Smith',
    last: 'Row'
  },
  age: 21
}

const fruits = ['Apple','Banana','Grape',1];

const book: [string, number, boolean] = ['bussiness', 1500, false];
book.push(21);

console.log(book[2]);


