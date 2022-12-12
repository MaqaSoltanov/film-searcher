const initialState = {
    title: 'Новый список',
    favoriteMovies: [],
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

    if(action.type === "DELETE_FROM_FAVORITES"){
        console.log("favoriteReducer worked for DELETE_FROM_FAVORITES")
        let favoriteMovies = [...state.favoriteMovies];
        let indexOfElementToDelete;

        favoriteMovies.forEach((item, index) => {
            if(item.imdbID === action.payload.id)
                indexOfElementToDelete = index;
        })

        favoriteMovies.splice(indexOfElementToDelete,1);

        return{
            ...state,
            favoriteMovies
        }
    }

    console.log("favoriteReducer returned default state");
    return { ...state };
}