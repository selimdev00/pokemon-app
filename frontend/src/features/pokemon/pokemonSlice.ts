import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPokemons, fetchAllPokemons, fetchPokemonTypes } from './pokemonAPI';

import type { Pokemon, QueryParams, PokemonType } from './types';

export const fetchPokemonsAsync = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (query: QueryParams) => {
    return await fetchPokemons(query);
  },
);

export const fetchAllPokemonsAsync = createAsyncThunk('pokemon/fetchAllPokemons', async () => {
  return await fetchAllPokemons();
});

export const fetchPokemonTypesAsync = createAsyncThunk('pokemon/fetchPokemonTypes', async () => {
  return await fetchPokemonTypes();
});

export interface PokemonState {
  pokemons: Pokemon[];
  status: 'idle' | 'loading' | 'failed';
  count: number;
  limit: number;
  types: PokemonType[];
}

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  count: 0,
  limit: 16,
  types: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      const index = state.pokemons.findIndex((p) => p.name === action.payload.name);
      if (index !== -1) {
        state.pokemons[index] = action.payload;
      }
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

    builder.addCase(fetchAllPokemonsAsync.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchAllPokemonsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.pokemons = action.payload.results;
      state.count = action.payload.count;
    });

    builder.addCase(fetchAllPokemonsAsync.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(fetchPokemonTypesAsync.fulfilled, (state, action) => {
      state.types = action.payload.results;
    });
  },
});

export const selectPokemon = (state: RootState) => state.pokemon;

export const { setLimit, setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
