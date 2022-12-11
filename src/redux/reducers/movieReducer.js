const initialState = {
    movies: []
}
    
export default function movieReducer(state = initialState, action) {
    if(action.type === "UPDATE_MOVIES")
    {
        console.log("movieReducer worked for UPDATE_MOVIES"); 
        const movies = [...action.payload.movies];        
        return{
            ...state,
            movies
        }        
    }
    console.log("movieReducer returned state")
    return { ...state };
}

