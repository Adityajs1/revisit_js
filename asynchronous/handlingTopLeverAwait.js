// await is only valid in async functions, and at top level modules

// IIFE's are self executing functions

(
   async()=>{
    const result = await fetch('')
    stores = await result.json
    console.log(stores)
    }
)();
