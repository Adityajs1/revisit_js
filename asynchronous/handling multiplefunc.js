const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function handlePokemons(){
    const result = await Promise.allSettled(
    [
        fetch(BULBASAUR_POKEMONS_URL),
        fetch(RATICATE_POKEMONS_URL),
        fetch(KAKUNA_POKEMONS_URL)
    ]
)
console.log(result);
}
handlePokemons();
