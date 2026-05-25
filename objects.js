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

const profile = {
    name : "Aditya",
    company : "Google",
    message : function(){
        console.log(`${this.name} works ar ${this.company}`);        
    },
    address : {
        city : "Bengaluru",
        address : 201304,
        country : "India"
    },
    greeting : function(){
        console.log("Welcome to India");        
    },
    salary : 5000000
}
for(key in profile){
    console.log(key);
    console.log(profile[key]); 
}

const target = {
    p : '2',
    a : '3'
}
const source = {
    q : '3',   // the source's a value will overshadow the target's one
    a : '4'
}
const result = Object.assign(target, source)
console.log(result);

// converitng an object to an array
const myObj = {
    name : "Adi",
    age : '19'
}

const myArr = Object.entries(myObj)
console.log(myArr);

// converting an array to an object
const entries = new Map([
    ["foo", "baar"],
    ["Adi", "19"]
])
const obj = Object.fromEntries(entries)
console.log(obj);

const name = {
    name :"Aditya"
}
//Object.freeze(name);
Object.seal(name)  // seal can be used to modify the existing values biut can't add something new

name.name = "Chitranshi"  // you cannot change any property with freeze func in an object
console.log(name);



