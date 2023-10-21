import { type PokemonResponse } from "../../types/type";

const getPokemons = async (
  apiUrl: string,
  maxPokemonListNumber: number,
): Promise<PokemonResponse> => {
  const response = await fetch(`${apiUrl}, ${maxPokemonListNumber}`);
  const pokemonPromise = (await response.json()) as PokemonResponse;

  return pokemonPromise;
};

export default getPokemons;
