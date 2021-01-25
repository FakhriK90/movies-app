
const initialState = {
    allMovies: [],
    filteredMovies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'initial':
            return {
                ...state,
                allMovies: action.data,
            };
        case 'remove':
            const removedMovie = state.allMovies.filter((movie) => movie.id !== action.id)
            return {
                ...state,
                allMovies: removedMovie

            };
        case 'likes':
            return state.map((movie) => {
                if (movie.id === action.id) {
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
                return movie;
            });
        case 'dislikes':
            return state.map((movie) => {
                if (movie.id === action.id) {
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
                return movie;
            });
        case 'filter':
            const filteredMovies = state.allMovies.filter(movie => movie.category === action.category);
            if (action.category) {
                return {
                    ...state,
                    filteredMovies
                };
            } else {
                return {
                    ...state
                }
            }
        default:
            return state;
    }
};

export default moviesReducer;