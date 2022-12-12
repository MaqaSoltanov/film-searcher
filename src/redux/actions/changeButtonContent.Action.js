export default function changeButtonContentAction(id) {
    console.log("changeButtonContentAction returned payload");

    return {
        type: "CHANGE_BUTTON_CONTENT",
        payload: {
            id: id
        }
    }
}