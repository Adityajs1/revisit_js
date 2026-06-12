class Animal{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name
    }

    set name(value){
        if(!value){
            console.error("there is no error")
            return;
        }
        if(value.length <= 2){
            console.log("The value must be of more than 2 characters!");
            return;
        }
        this._name = value
    }
}

const animal = new Animal("Aditya")
console.log(animal.name);
