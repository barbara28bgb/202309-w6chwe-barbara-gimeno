import getPokemons from "./component/pokemonData/pokemonData.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?&limit=10&offset=";
const maxPokemonListNumber = 10;

const pokeApiResponse = await getPokemons(apiUrl, maxPokemonListNumber);
console.log(pokeApiResponse);
export default pokeApiResponse;
