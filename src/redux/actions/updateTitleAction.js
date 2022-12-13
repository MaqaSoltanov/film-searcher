export default function updateTitleAction(newTitle){
    console.log("updateTitleAction returned payload")
    return{
        type: "UPDATE_TITLE",
        payload: {
            newTitle: newTitle
        }
    }
}