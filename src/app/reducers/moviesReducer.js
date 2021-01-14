
export default function moviesReducer(state = null, action) {
    switch (action.type) {
        case 'initial':
            return [...action.data];
        case 'remove':
            return state.filter((movie) => movie.id !== action.id);
        case 'like':
            return state.map((movie) => {
                if (movie.id === action.id) {
                    return {
                        ...movie,
                        likes: movie.likes + 1,
                        likesActive: !movie.likesActive,
                        dislikesActive: movie.likesActive
                    };
                }
                return {...movie};
            });
        case 'dislike':
            return state.map((movie) => {
                if (movie.id === action.id) {
                    return {
                        ...movie,
                        dislikes: movie.dislikes + 1,
                        dislikesActive: !movie.dislikesActive,
                        likesActive: movie.dislikesActive
                    };
                }
                return {...movie};
            });
        case 'filter':
            return state.map((movie) => {
                movie.visible = true;
                if (movie.category !== action.category && action.category !== 'default') {
                    return {
                        ...movie, visible: false
                    }
                }
                return {...movie};
            });
        default:
            return state;
    }

}