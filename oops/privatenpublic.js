class WashingMachine{
    //Public
    brand;

    //Private
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand){
        this.brand = brand
    }
    start(cycle){
        if(!this.#powerStatus){
            this.#turnOn
        }
        this.#currentCycle = null 
        console.log(`Starting ${cycle} cycle`);
       this.#spin()
       this.#drain()
       this.stop()
    }
    stop(){
         this.#turnOff()
         console.log("Washine Machine Stopped!");
    }
    #spin(){
       console.log("Spinning...!");
    }
    #drain(){
        console.log("Draining...!");
    }
    #turnOn(){
        this.#powerStatus = true;
        console.log("POWER ON!");
        
    }
    #turnOff(){
     this.#powerStatus = false
     console.log("Power Off");
     
    }
}

const lg = new WashingMachine("LG")
console.log(lg);
lg.start("Quick Wash Cycle!")
