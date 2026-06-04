// let promise = new Promise(function(resolve, reject){
//    resolve("I am going to get resolved!");
   
// });
// console.log(promise);

//Executor function
// function(resolve, reject){
//     resolve()
//     reject()
//     resolve()
// }
// .then(), .catch(), and .finally - Handling Promises
let loading = false;
let promise = new Promise(function(resolve, reject){
    loading = true;
    resolve("I am resolved!")
})
promise.then(
    (result)=>{console.log(result)},
   
).catch(
    (error)=>{console.error(error)}
).finally(
    ()=>{
        loading = false;
    }
)

// Promise Chaining
// Returning an promise with .then() handler

const getProfile = new Promise(function(resolve, reject){
    const profile = {
        name : "Aditya",
        age : 17,
        email : "adityasijsi"
    }
    resolve(profile)
})
getProfile.then(
    (profile)=>{
        console.log(`The profile name is ${profile.name}`);
        
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve("Banglore")
            }, 1000)
        })
    }
).then(
    (address)=>{
        console.log(`He lives in ${address}`);    
    }
)