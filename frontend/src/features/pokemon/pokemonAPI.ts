import ky, { request } from '../../utils/ky';

import type { PokemonCatalog, QueryParams } from './types';

export async function fetchPokemons(query: QueryParams): Promise<PokemonCatalog> {
  return await request.get(`pokemon?limit=${query.limit}&offset=${query.offset}`).json();
}
