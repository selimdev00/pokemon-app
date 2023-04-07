import pokemonReducer, { PokemonState } from './pokemonSlice';

describe('pokemon reducer', () => {
  const initialState: PokemonState = {
    pokemons: [],
    status: 'idle',
    count: 0,
    limit: 16,
  };

  it('should handle initial state', () => {
    expect(pokemonReducer(undefined, { type: 'unknown' })).toEqual({
      pokemons: [],
      status: 'idle',
      count: 0,
      limit: 16,
    });
  });
});
