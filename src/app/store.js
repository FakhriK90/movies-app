import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/moviesReducer";

export default configureStore({
  reducer: {
    moviesReducer
  },
});
