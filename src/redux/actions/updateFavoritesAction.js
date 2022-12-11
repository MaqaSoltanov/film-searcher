export default function updateFavoritesAction(movie){
    console.log("updateFavoritesAction returned movie")
    return{
        type: "UPDATE_FAVORITES",
        payload: {
            movie: movie
        }
    }
}