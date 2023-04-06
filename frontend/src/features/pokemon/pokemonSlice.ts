import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPokemons } from './pokemonAPI';

export const fetchPokemonsAsync = createAsyncThunk('pokemon/fetchPokemons', async () => {
  const data = await fetchPokemons();
  return data.results;
});

export interface PokemonState {
  pokemons: object[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
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
      state.pokemons = action.payload;
    });

    builder.addCase(fetchPokemonsAsync.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const selectPokemons = (state: RootState) => state.pokemon.pokemons;

export default pokemonSlice.reducer;
