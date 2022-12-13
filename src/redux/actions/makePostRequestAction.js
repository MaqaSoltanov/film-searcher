export default function makePostRequestAction(id){
    return{
        type: "MAKE_POST_REQUEST",
        payload: {
            id: id
        }
    }
}   