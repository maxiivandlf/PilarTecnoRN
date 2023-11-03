import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokeSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
