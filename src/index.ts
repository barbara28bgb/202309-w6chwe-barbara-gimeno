import getPokemons from "./component/pokemonData/pokemonData.js";
import App from "./App/App.js";
import { type Pokemon } from "./types/type.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?&limit=10&offset=";

const maxPokemonListNumber = 10;

const pokeApiResponse = await getPokemons(apiUrl, maxPokemonListNumber);

export default pokeApiResponse;

const bodyElement = document.querySelector("body")!;
const appElement = new App(bodyElement);
appElement.render();

const pokeList = document.querySelector("ul")!;

pokeApiResponse.results.forEach(async (pokemon: Pokemon) => {
  const pokemonList = document.createElement("li");
  pokemonList.textContent = `${pokemon.name}`;
  pokeList.appendChild(pokemonList);
});
