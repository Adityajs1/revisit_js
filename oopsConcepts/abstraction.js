class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Engine started");
  }

  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Spark generated");
  }
}

const car = new Car();
car.startEngine();
// Only startEngine() is visible to users; internal complexity is abstracted.