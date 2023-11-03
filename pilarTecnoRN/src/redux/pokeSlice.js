import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  pokemonDetail: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    loading: (state) => {
      state.loading = true;
    },
    setPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
  },
});

export const { setPokemons, loading, setPokemonDetail } = pokemonSlice.actions;
export default pokemonSlice.reducer;
