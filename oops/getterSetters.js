class Animal{
    constructor (name){
      this.name = name
    }

    get name(){
        return `The anima is ${this._name}`
    }
    set name(value){

        if(!value){
            console.error("There is no name")
            return;
        }
        if(value.length <= 2){
            console.log("The name is too small!")
            return;
        }
        this._name = value
    }
}

const a = new Animal("Cow")
console.log(a.name);

// static properties

class MyClass{
    static staticMethod(){
        console.log(this);
    }
}
MyClass.staticMethod
