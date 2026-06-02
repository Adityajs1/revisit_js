// const animal = {
//   eat() {
//     console.log("eating...");
//   }
// };

// const dog = {
//   bark() {
//     console.log("woof!");
//   }
// };

// Object.setPrototypeOf(dog, animal); 

// dog.bark(); 
// dog.eat();  

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hi, I am ${this.name}`);
}
const p1 = new Person("Aditya");
p1.greet();