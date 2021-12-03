abstract class Person {
  static spacies = 'Homo sapiens';
  static isAdult(age: number) {
    if(age > 17) return true;
    return false;
  }
  constructor(public readonly name: string,protected age: number) {
  }

  incrementAge(){
    this.age += 1;
  }
  greeting(this: Person){
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`)
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static Instance: Teacher;
  explainJob(){
    console.log(`I am a teacher and I teach ${this.subject}`);
  }
  get subject(): string{
    if(!this._subject) {
      throw new Error('There is no subject.');
    }
    return this._subject;
  }

  set subject(value){
    if(!value) {
      throw new Error('There is no subject.');
    }
    this._subject = value;
  }
  private constructor(name: string, age: number,private _subject: string){
    super(name,age);
  }
  static getInstance(){
    if(Teacher.Instance) return Teacher.Instance;
    Teacher.Instance = new Teacher ('Ryo',25,'Infomation');
    return Teacher.Instance;
  }
}

const teacher = Teacher.getInstance();
teacher.greeting();
