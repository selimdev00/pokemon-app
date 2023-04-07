import { request } from '../../utils/ky';

import type { PokemonCatalog, PokemonTypes, QueryParams } from './types';

export async function fetchPokemons(query: QueryParams): Promise<PokemonCatalog> {
  return await request.get(`pokemon?limit=${query.limit}&offset=${query.offset}`).json();
}

export async function fetchAllPokemons(): Promise<PokemonCatalog> {
  return await request.get('pokemon?limit=99999').json();
}

export async function fetchPokemonTypes(): Promise<PokemonTypes> {
  return await request.get('type').json();
}
