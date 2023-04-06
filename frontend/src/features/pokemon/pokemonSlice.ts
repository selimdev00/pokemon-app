import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPokemons } from './pokemonAPI';

import type { Pokemon, QueryParams } from './types';

export const fetchPokemonsAsync = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (query: QueryParams) => {
    return await fetchPokemons(query);
  },
);

export interface PokemonState {
  pokemons: Pokemon[];
  status: 'idle' | 'loading' | 'failed';
  count: number;
  limit: number;
}

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  count: 0,
  limit: 16,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsAsync.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchPokemonsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.pokemons = action.payload.results;
      state.count = action.payload.count;
    });

    builder.addCase(fetchPokemonsAsync.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const selectPokemon = (state: RootState) => state.pokemon;

export const { setLimit } = pokemonSlice.actions;

export default pokemonSlice.reducer;
