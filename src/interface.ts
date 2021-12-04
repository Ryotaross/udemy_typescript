//type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Namealbe {
  name?: string;
  nickName?: string;
}

const nameable: Namealbe ={
  name:'ryo',
  nickName: 'RYOTARO'
}

interface Human extends Namealbe {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human{
  constructor(public age: number, public experience: number,public name?: string){
  }
  greeting(message: string = 'Hello'){
    console.log('Hello');
  }
}
const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string){
    console.log(message);
  }
}
const user: Human = tmpDeveloper;
