export default function updateFavoritesAction(movie){
    console.log("updateFavoritesAction returned payload")
    return{
        type: "UPDATE_FAVORITES",
        payload: {
            movie: movie
        }
    }
}