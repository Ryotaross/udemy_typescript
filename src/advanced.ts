interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
//type EnginnerBlogger = Engineer & Blogger;
interface EnginnerBlogger extends Engineer, Blogger{}
const quill : EnginnerBlogger = {
  name: 'Quill',
  role: 'front',
  follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string| number{
  if(typeof x === 'string'){
    return x.toUpperCase();
  }
  return x;
}
interface TmpFunc {
  (x: string): number;
  (x: string): number;
}
const upperHello: TmpFunc = function(x: string | number){return 0};
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): number;
}
let unionFunc: FuncA & FuncB;

//unionFunc = function(a: number | string, b?: number | string) {return 0}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker){
  console.log(nomadWorker.name);
  if('role' in nomadWorker){
    console.log(nomadWorker.role);
  }
  if('follower' in nomadWorker){
    console.log(nomadWorker.follower)
  }
}
class Dog {
  kind: 'dog' = 'dog';
  speak(){
    console.log('bow-wow');
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak(){
    console.log('tweet-tweet');
  }
  fly(){
    console.log('fluter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet){
  pet.speak();
  switch(pet.kind){
    case 'bird':
      pet.fly();
  }
  if(pet instanceof Bird){
    pet.fly();
  }
}
havePet(new Bird());

const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

interface Desinner {
  name: string;
  [index: string]: string;
}
const desinner: Desinner ={
  name: 'ryo',
  role: 'web'
}
interface DownloadData{
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadData: DownloadData ={
  id:1
}
console.log(downloadData.user?.name?.first);
const userData = downloadData.user ?? 'no-user'
type id = DownloadData["id"]
enum Color{
  RED,
  BLUE
}
class AdvancedPerson {
  name: string = 'Peter'
  age: number = 35;
}
class AdvancedCar {
  name: string = 'Prius'
  age: number = 6;
}
let target = new AdvancedPerson()
let source = new AdvancedCar()
target = source;

function advancedFn(...args: readonly number[]) {
}
advancedFn(0, 1);
let milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
