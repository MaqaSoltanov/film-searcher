const initialState = {
    movies: []
}

export default function movieReducer(state = initialState, action) {
    if (action.type === "UPDATE_MOVIES") {
        console.log("movieReducer worked for UPDATE_MOVIES");
        const movies = [...action.payload.movies];
        return {
            ...state,
            movies
        }
    }

    if (action.type === "CHANGE_BUTTON_CONTENT") {
        console.log("movieReducer worked for CHANGE_BUTTON_CONTENT");
        let movies = [...state.movies];
        // Changing the isAdded property based on imdbID to the opposite
        movies = movies.map((movie) => {
            if (movie.imdbID === action.payload.id) {
                let isAdded = !(movie.isAdded);
                return {
                    ...movie,
                    isAdded
                }
            }

            return { ...movie }
        })

        return {
            ...state,
            movies
        }
    }

    console.log("movieReducer returned default state")
    return { ...state };
}

