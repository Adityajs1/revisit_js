// const car = {
//     name : "BMW",
//     model : "s5"
// }
// console.log(car.name);

// constructor function
function Car(name, model){
    this.name = name,
    this.model = model
}

const bmwcar = new Car("BMW", "x1")
const audi = new Car("audi", "dasd")
console.log(bmwcar);
console.log(audi);

const person = new Object();
person.name = "Aditya";
person.age = 19
console.log(person);



