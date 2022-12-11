const initialState = {
    title: 'Новый список',
    favoriteMovies: []
}

export default function favoriteReducer(state = initialState, action)
{
    console.log("FavoriteReducer returned state");    
    return {...state};
}