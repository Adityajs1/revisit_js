// const promise = new Promise(function(resolve, reject){
//     setTimeout(
//         ()=>{
//             resolve("I am a Promise")
//         }, 2000
//     )
// })
// promise.then(
//     (x) => {
//         console.log(x)
//     }
// )

async function foo(){
   return Promise.resolve(101);
   
}

// foo().then(function(result){
//     console.log(result);
// })

async function tacklePromise(){
    const result = await foo();  // calling promises using await
    console.log(result);
}
tacklePromise();
console.log("I am after the tackle show")  
// OUTPUT :
// i am after the tackle show   // 
// 101

// the await function will look for the await and then it will be suspended till the function invoked 
// does not get resolved or rejected

/*
1. the await function could not be defined globally and and wherever the await function is written
the function should be started with async
*/

const errorPromise = new Promise((resolve, reject) => {
    reject("Error Occured!")
})

async function handlePromise(){
    try {
        await errorPromise;
    } catch (error) {
        console.error(error);
    }
}
handlePromise();

