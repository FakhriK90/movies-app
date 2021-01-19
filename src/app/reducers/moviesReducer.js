import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        moviesInitial(state, action) {
            return [...action.payload];
        },
        moviesRemove(state, action) {
            return state.filter((movie) => movie.id !== action.payload.id);
        },
        moviesLikes(state, action) {
            return state.map((movie) => {
                if (movie.id === action.payload.id) {
                    if (action.payload.type === 'likes') {
                        if (movie.dislikesActive) {
                            return {
                                ...movie,
                                likes: movie.likes + 1,
                                dislikes: movie.dislikes - 1,
                                likesActive: !movie.likesActive,
                                dislikesActive: movie.likesActive
                            };
                        }
                        return {
                            ...movie,
                            likes: movie.likes + 1,
                            likesActive: !movie.likesActive,
                            dislikesActive: movie.likesActive
                        };
                    }
                    if (movie.likesActive) {
                        return {
                            ...movie,
                            dislikes: movie.dislikes + 1,
                            likes: movie.likes -1,
                            dislikesActive: !movie.dislikesActive,
                            likesActive: movie.dislikesActive
                        };
                    }
                    return {
                        ...movie,
                        dislikes: movie.dislikes + 1,
                        dislikesActive: !movie.dislikesActive,
                        likesActive: movie.dislikesActive
                    };
                }
                return {...movie};
            });
        },
        moviesFilter(state, action) {
            let newState = state.map(movie => ({...movie}));
            let filterMovies = newState.filter((movie) => movie.category === action.payload.category);
            if (action.payload.category) {
                newState.filteredMovies = filterMovies;
            } else {
                newState.filteredMovies = newState;
            }
            return newState;
        },
    }
});

export const { moviesInitial, moviesRemove, moviesLikes, moviesDislikes, moviesFilter } = moviesSlice.actions

export default moviesSlice.reducer