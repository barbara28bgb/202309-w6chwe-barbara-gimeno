import type { PokemonResponse } from "./type";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (): Promise<PokemonResponse> => {
  const response = await fetch(apiUrl);
  const pokemonPromise = (await response.json()) as PokemonResponse;

  return pokemonPromise;
};

export default getPokemons;
