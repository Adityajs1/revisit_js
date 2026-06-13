function makeCounter(start){
    let counter = start;

    return {
        increment : ()=>{
            counter += 1;
            return counter;
        },
        decrement : ()=>{
            if(counter < 0){
                console.error("The counter can't be negative")
            }
            else{
                counter -= 1;
                return counter;
            }
        },
        reset : ()=>{
            counter = 0;
            return counter;
        }
    }
}

const startCounter = makeCounter(5);
console.log(startCounter.increment());
