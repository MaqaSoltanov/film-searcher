export default function updateMoviesAction(movies) { 
    console.log("updateMoviesAction returned payload")
    return {
        type: "UPDATE_MOVIES",
        payload: {
            movies: movies
        }
    }
}