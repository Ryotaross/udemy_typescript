import { NumberTypeAnnotation } from "@babel/types";
import { func } from "prop-types";

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

enum CoffeeSize  {
  Short = 'short',
  Tall = 'Tall',
  Grande = 'Grande',
  Venti = 'Venti' 
}

const coffee = {
  hot: true,
  size: CoffeeSize.Tall
}

console.log(CoffeeSize.Short);

let unionType: number | string = 10;
unionType = 'hello';

type ClothSize = 'small' | 'medium' | 'large'
const apple =  'apple';
let clothSize : ClothSize = 'large'

const cloth : {
  color: string,
  size: ClothSize
} = {
  color : 'white',
  size : 'large'
}

function add (num1: number,num2: number): number {
  return num1 + num2;
}

function sayHello(): void{
  console.log('Hello!')
}

console.log(sayHello());
let tmp: undefined;

const anotherAdd : (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21,doubleNum => {
  return doubleNum
});

let unknownInput: unknown ;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if(typeof unknownInput === 'string'){
  text = unknownInput
}


