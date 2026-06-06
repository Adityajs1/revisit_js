const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v1/pokemon/kakuna';

function getPromise(URL){
    return fetch(URL)
    .then(
        (response)=>{
            if(!response.ok){
                throw new Error(`HTTP ERROR ${response.status}`)
            }
            else{
                return response.json();
            }
        }
    )
}

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

//all
// Promise.all([promise_1, promise_2, promise_3]) // all takes an array
// .then(
//     (result)=>{
//         console.log(result);
//     }
// )
// .catch(
//     (error)=>{
//         console.log(error);
//     }
// )

// allSettled
//fullfilling(resolve)+ rejection

// Promise.allSettled([promise_1, promise_2, promise_3]) // all takes an array
// .then(
//     (result)=>{
//         console.log(result);
//     }
// )
// .catch(
//     (error)=>{
//         console.log(error);
//     }
// )

// returns the first executed promise
Promise.race([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})

// how to cancel a promise

