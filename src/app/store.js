import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from "./reducers/moviesReducer";

export default configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});
