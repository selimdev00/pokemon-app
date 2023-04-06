import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
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
}

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  count: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
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

export default pokemonSlice.reducer;
