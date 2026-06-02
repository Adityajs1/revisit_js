// Create a class Vehicle with:
//a constructor that takes brand and speed
//a method describe() that logs "Brand: Toyota, Speed: 120"
//Create a class Car that extends Vehicle with:
//a constructor that also takes numWheels, calls super for the rest
//a method info() that logs "Car has 4 wheels"
//Create an instance of Car and call both describe() and info() on it.

class Vehicle{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    describe(){
        console.log(`The car is of brand ${this.brand} and it's speed is ${this.speed}km/hr!`);
    }
}

class Car extends Vehicle{
    constructor(numWheels, brand, speed){
        super(brand, speed);  // super is called first, and could only be called only once
        this.numWheels = numWheels;
    }
    info(){
        console.log(`Car has ${this.numWheels} wheels`);
    }
}

const car = new Car(4, "Toyota", 120);
car.describe();
car.info();