class Human{
    //Public field
    species = "Homo Sapiens"
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    introduce(){
        console.log(`Hey! I am ${this.name}, i am ${this.age} years old`)
}
    sleep(){
    console.log(`${this.name} is sleeping!`)
}
}

class Student extends Human{
    constructor(name, age , gender){
        super(name, age)
        this.gender = gender
    }
    introduce(){
        console.log(`Hey! I am ${this.name}, i am ${this.age} years old, and i am ${this.gender}`)
}
    study(){
        console.log(`${this.name} is studying`)
    }
    
}

const aditya = new Student("Aditya", 19, "male")
console.log(aditya);
