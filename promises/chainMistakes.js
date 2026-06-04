let promise = new Promise(function(resolve, reject){
    resolve(10);
})

// promise.then(
//     (value)=>{
//         value++;
//         return value;
//     }
// )
// promise.then(
//     (value)=>{
//         value = value + 10;      // that is not a ppromise chaining
//         return value;
//     }
// )
// promise.then(
//     (value)=>{
//         value = value + 20;
//         console.log(value); 
//     }
// )

promise.then(
    (value)=>{
        value++;
        return value;
    }
).then(
    (value)=>{
        value = value + 10;  // this is actually a promise chaining
        return value;
    }
).then(
    (value)=>{
        value = value+20
        console.log(value);
    }
)