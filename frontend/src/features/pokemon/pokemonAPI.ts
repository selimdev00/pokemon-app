import { request, ResponseData } from '../../utils/ky';

export async function fetchPokemons(): Promise<ResponseData> {
  return await request.get('pokemon?limit=10&offset=0').json();
}
