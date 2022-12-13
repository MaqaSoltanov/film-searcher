export default function makeGetRequestAction(idArray) {
    return {
        type: "MAKE_GET_REQUEST",
        payload: {
            idArray: idArray
        }
    }
}