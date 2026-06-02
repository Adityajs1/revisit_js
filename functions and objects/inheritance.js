// This is where classes shine over manual prototype wiring.

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound!`);
    }
}

class Dog extends Animal{
      speak(){
        console.log(`${this.name} barks!`);  // d  →  Dog.prototype  →  Animal.prototype  →  Object.prototype  →  null
      }
}
const d = new Dog("Bruno");
d.speak();
