class Engine {
    start(){
        console.log("Engine Started!")
    }
}

class Car{
    constructor(){
        this.engine = new Engine()
    }
   startEngine(){
     this.engine.start()
   }
}

const car = new Car();
car.startEngine();
