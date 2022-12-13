const initialState = {
    title: '',
    favoriteMovies: [],
    getID: '',
    moviesFromApi: []
}

export default function favoriteReducer(state = initialState, action) {
    if (action.type === "UPDATE_FAVORITES") {
        console.log("favoriteReducer worked for UPDATE_FAVORITES");
        const newMovie = action.payload.movie
        const favoriteMovies = [...state.favoriteMovies, newMovie];

        return {
            ...state,
            favoriteMovies
        }
    }

    if (action.type === "DELETE_FROM_FAVORITES") {
        console.log("favoriteReducer worked for DELETE_FROM_FAVORITES")
        let favoriteMovies = [...state.favoriteMovies];
        let indexOfElementToDelete;

        favoriteMovies.forEach((item, index) => {
            if (item.imdbID === action.payload.id)
                indexOfElementToDelete = index;
        })

        favoriteMovies.splice(indexOfElementToDelete, 1);

        return {
            ...state,
            favoriteMovies
        }
    }

    if (action.type === "UPDATE_TITLE") {
        console.log("favoriteReducer worked for UPDATE_TITLE");
        let title = action.payload.newTitle;

        return {
            ...state,
            title
        }
    }

    if (action.type === "MAKE_POST_REQUEST") {
        console.log("favoriteReducer worked for MAKE_POST_REQUEST");
        const getID = action.payload.id;
        return {
            ...state,
            getID
        }
    }

    console.log("favoriteReducer returned default state");
    return { ...state };
}