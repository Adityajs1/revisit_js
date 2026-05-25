//Implicit Binding
const person = {
    name : "Aditya",
    age : "19",
    returnThis : function(){
        return this;
    }
}
console.log(this); // so here this is invoked in a function so it's rep the Object
console.log(person.returnThis());
function greetMe(obj) {
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old!`)
    }

    console.log(obj);
}

// greetMe(tom);
// tom.logMessage();

// greetMe(jerry);
// jerry.logMessage();
// "this inside any function refers to the window object, but there is a catch"
// "if "use strict" has been used at the top of the file, then it refers to the invoked functions e.g.,nested function

// even after using usw strict arrow function refers to the window 

const fruit = {
    name : "mango",
    color : "yellow",
    // getColor : () => `${this.name} is ${this.color}` // it will go to its parent scope 
     getColor : function(){
        return () => `${this.name} is ${this.color}`} // now it will refer to the fruit object
     }

console.log(fruit.getColor()) // undefined is undefined

const likes = function(hobby1, hobby2){
console.log( this.name +' likes ' + hobby1 + ',' + hobby2)
}
const user = {
    name : 'Aditya'
}
likes.call(user, "cricket", "chess")

const hobbies = ["cricket", "chess"]
likes.apply(user, hobbies)

