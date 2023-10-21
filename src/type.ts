export interface PokemonBase {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon extends PokemonBase {
  name: string;
  url: string;
}
