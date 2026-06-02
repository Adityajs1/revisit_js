//Usinng Prototypes

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hi, I'm ${this.name}`);
// };

// const p = new Person("Khichak");
// p.greet();

// Using classes -the same stuff

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    greet(){
        console.log(`Hi, My name is ${this.name} and I am ${this.age} years old!`);  // because the data is stored inside the object
    }
}
const p1 = new Person("Aditya", 19);
p1.greet();



