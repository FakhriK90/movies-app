// actions
const INITIAL = "INITIAL";

// action creators
export function fetchInitial(data) {
    return {
        type: INITIAL,
        data
    }
}

//reducer
export default function moviesReducer(state = null, action) {
    switch (action.type) {
        case INITIAL:
            return [...action.data];
        case 'remove':
            return state.filter((movie) => movie.id !== action.id);
        case 'like':
            return state.map((movie) => {
                if (movie.id === action.id) {
                    return {
                        ...movie, likes: movie.likes + 1
                    };
                }
                return {...movie};
            });
        case 'dislike':
            return state.map((movie) => {
                if (movie.id === action.id) {
                    return {
                        ...movie, dislikes: movie.dislikes + 1
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