import getPokemons from "./component/pokemonData/pokemonData.js";
import App from "./App/App.js";
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?&limit=10&offset=";
const maxPokemonListNumber = 10;

const pokeApiResponse = await getPokemons(apiUrl, maxPokemonListNumber);
console.log(pokeApiResponse);

export default pokeApiResponse;

const bodyElement = document.querySelector("body")!;
const appElement = new App(bodyElement);
appElement.render();
