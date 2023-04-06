import { request } from '../../utils/ky';

import type { PokemonCatalog } from './types';

export async function fetchPokemons(): Promise<PokemonCatalog> {
  return await request.get('pokemon?limit=10&offset=0').json();
}
