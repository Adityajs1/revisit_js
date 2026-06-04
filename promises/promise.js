// // let promise = new Promise(function(resolve, reject){
// //    resolve("I am going to get resolved!");
   
// // });
// // console.log(promise);

// //Executor function
// // function(resolve, reject){
// //     resolve()
// //     reject()
// //     resolve()
// // }
// // .then(), .catch(), and .finally - Handling Promises
// let loading = false;
// let promise = new Promise(function(resolve, reject){
//     loading = true;
//     resolve("I am resolved!")
// })
// promise.then(
//     (result)=>{console.log(result)},
   
// ).catch(
//     (error)=>{console.error(error)}
// ).finally(
//     ()=>{
//         loading = false;
//     }
// )

// // Promise Chaining
// // Returning an promise with .then() handler

// const getProfile = new Promise(function(resolve, reject){
//     const profile = {
//         name : "Aditya",
//         age : 17,
//         email : "adityasijsi",
//         permissions : ['db', 'dev']
//     }
//     resolve(profile)
// })

// getProfile.then(
//     (profile)=>{
//         console.log(`The profile name is ${profile.name}`);
        
//         return new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 resolve("Banglore")
//             }, 1000)
//         })
//     }
// ).then(
//     (address)=>{
//         console.log(`He lives in ${address}`);    
//     }
// )

// // returning a simple value
// getProfile.then(
//     (profile)=>{
//         console.log(`get ${profile.name}`);
//         if(!profile.permissions.includes('hr')){
//             throw new Error("You are not allowed to access the HR module ")
//         }
//         return profile.email;
//     }
// ).then(
//     (email)=>{
//         console.log(`The email is ${email}`);
//     }
// ).catch(
//     (error)=>{
//         console.log(error); 
//     }
// )


// let promise401= new Promise(function(resolve, reject){
//       reject(401)
// })

// promise401.catch(
//     (error)=>{
//         console.log(error);
//         if(error == 401){
//             console.log("Rethrowing 401");
//             console.log(error);
//         }
//         else{
//             //do something
//         }
        
//     }
// ).then(
//     (result)=>{
//         console.log(result);
//     }
// ).catch(
//     (error)=>{
//         console.log(`handling ${error} here`);
//     }
// )

// create a promise
let promiseFinally = new Promise(function(resolve, result){
    resolve("Testing Finally")
})
promiseFinally.finally(
    function(){
        console.log("running finally!");
    }
).then(
    (result)=>{
        console.log(result);      
    }
)
