export default function deleteFromFavoritesAction(id) {
    console.log("deleteFromFavoritesAction returned payload")
    return {
        type: "DELETE_FROM_FAVORITES",
        payload: {
            id: id
        }
    }
}