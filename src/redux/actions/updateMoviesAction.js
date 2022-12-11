export default function updateMoviesAction(movies) { 
    return {
        type: "UPDATE_MOVIES",
        payload: {
            movies: movies
        }
    }
}