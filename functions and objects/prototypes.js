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

// Create a Vehicle object with a method describe() that logs "I am a vehicle".
//Then create a car object with a property brand: "Toyota".
//Set car's prototype to Vehicle manually (using Object.setPrototypeOf).
//Call car.describe() — it should work even though car doesn't have that method.
//Then log car.hasOwnProperty("describe") — should be false.
//Write it, run it mentally, then share what you get.

const vehicle = {
    describe(){
        console.log("I am a Vehicle!");        
    }
}

const car = {
    'brand' : 'suzuki'
}
Object.setPrototypeOf(car, vehicle)
car.describe();

console.log(car.hasOwnProperty("describe"));
