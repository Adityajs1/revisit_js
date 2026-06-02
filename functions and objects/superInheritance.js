class Animal{
    constructor(name){
        this.name = name;
    }
}
// super(name) calls the parent class constructor.
// If you forget it in a child class constructor, JS throws a ReferenceError before you can even touch this.
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    info(){
        console.log(`${this.name} is of ${this.breed} breed!`);   
    }
}

const d = new Dog("Bruno", "Labrador");
d.info();