const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function resolvePokemons() {
    const responses = Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL),
        fetch(RATICATE_POKEMONS_URL),
        fetch(KAKUNA_POKEMONS_URL)
    ]);
    const results = await responses;
    console.log(results)

    const pk_1 = await results[0]?.value.json();
    const pk_2 = await results[1]?.value.json();
    const pk_3 = await results[2]?.value.json();

    console.log(pk_1);
    console.log(pk_2);
    console.log(pk_3);
}

async function resolvePokemonsV2() {
    const responses = await Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL).then(response => response.json()),
        fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
        fetch(KAKUNA_POKEMONS_URL).then(response => response.json())
    ]);

    console.log(responses);
}

resolvePokemonsV2();
// const response = await result;
// console.log(response);

// const pk_1 = await results[0]?.value.json();
// const pk_2 = await results[1]?.value.json();
// const pk_3 = await results[2]?.value.json();  // the await and .then will not be there
// console.log(pk_1);
// console.log(pk_2);
// console.log(pk_3);

// Important 

// so what fetch does it returns you a promise and for that retured promise to be in json you have to 
// return another promise, that's why the commited it , because you have to index then specific resuklt's and use await
// for handling the returned promise