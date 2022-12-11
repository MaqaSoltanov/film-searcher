const initialState = {
    title: 'Новый список',
    favoriteMovies: []
}

export default function favoriteReducer(state = initialState, action) {
    if (action.type === "UPDATE_FAVORITES") {
        console.log("FavoriteReducer worked for UPDATE_FAVORITES action");
        const newMovie = action.payload.movie
        const favoriteMovies = [...state.favoriteMovies, newMovie];

        return {
            ...state,
            favoriteMovies
        }
    }

    console.log("FavoriteReducer returned default state");
    return { ...state };
}