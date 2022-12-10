const initialState = {
    movies: []
}

export default function movieReducer(state = initialState, action) {
    console.log("MovieReducer returned state");
    return { ...state };
}